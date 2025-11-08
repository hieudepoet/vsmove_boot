'use server';

/**
 * @fileOverview Explains a single function from a smart contract, identifying concepts that require further explanation for non-technical users.
 *
 * - explainContractFunction - A function that takes smart contract code and explains a specific function within it.
 * - ExplainContractFunctionInput - The input type for the explainContractFunction function.
 * - ExplainContractFunctionOutput - The return type for the explainContractFunction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainContractFunctionInputSchema = z.object({
  contractCode: z.string().describe('The entire smart contract code.'),
  functionName: z.string().describe('The name of the function to explain.'),
});
export type ExplainContractFunctionInput = z.infer<typeof ExplainContractFunctionInputSchema>;

const ExplainContractFunctionOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the function.'),
  coinFlow: z.string().describe('A detailed explaination of coin flow in function'),
  umlSequenceDiagram: z.string().describe('A UML sequence diagram representing the function execution.'),
  conceptsToExplain: z.array(z.string()).describe('List of concepts that need further explanation for non-technical users.'),
});
export type ExplainContractFunctionOutput = z.infer<typeof ExplainContractFunctionOutputSchema>;

export async function explainContractFunction(input: ExplainContractFunctionInput): Promise<ExplainContractFunctionOutput> {
  return explainContractFunctionFlow(input);
}

const identifyConceptsTool = ai.defineTool({
  name: 'identifyConcepts',
  description: 'Identifies concepts within the function explanation that would be difficult for a non-technical person to understand.',
  inputSchema: z.object({
    explanation: z.string().describe('The explanation of the smart contract function.'),
  }),
  outputSchema: z.array(z.string()).describe('A list of concepts that require further explanation.'),
}, async (input) => {
  // Placeholder implementation:  In a real application, this would use an LLM or other NLP technique
  // to identify complex concepts.
  return input.explanation.split(/\s+/).filter((_, index) => index % 5 === 0); // Mock implementation
});

const prompt = ai.definePrompt({
  name: 'explainContractFunctionPrompt',
  input: {schema: ExplainContractFunctionInputSchema},
  output: {schema: ExplainContractFunctionOutputSchema},
  tools: [identifyConceptsTool],
  prompt: `You are an expert smart contract auditor and educator. Your goal is to explain a given function from a smart contract in a way that is easy to understand, even for people without a technical background.

  Here is the contract code:
  {{contractCode}}

  Here is the specific function you need to explain: {{functionName}}

  1.  Provide a short explanation of the function's logic and purpose about 4-7 lines with no break down. Focus on clarity and avoid unnecessary jargon.
  2.  Provide a short explaination of coin or money flow for non-technical user when using function, if function don't need coin, return No Need Coin 
  3.  Generate a short UML sequence diagram representing the function's execution flow by short words, code start with @startuml and end with @enduml.
  4.  Use the identifyConcepts tool to identify any concepts in your explanation that a non-technical user might struggle with. List these concepts explicitly.

  Make sure your explanation is thorough and accurate. The UML sequence diagram should visually represent the function's steps. The identified concepts should be helpful for someone seeking to understand the contract.

  Output MUST be a valid JSON:
  {
    "explanation": "detailed explanation",
    "coin flow": "detail coin flow",
    "umlSequenceDiagram": "UML sequence diagram",
    "conceptsToExplain": ["concept1", "concept2"]
  }
  `,
});

const explainContractFunctionFlow = ai.defineFlow(
  {
    name: 'explainContractFunctionFlow',
    inputSchema: ExplainContractFunctionInputSchema,
    outputSchema: ExplainContractFunctionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    console.log("output", output?.umlSequenceDiagram);
    return output!;
    // return mockpromt; 
  }
);

const mockpromt = {
      conceptsToExplain:["concept1", "concept2"],
      explanation: "explaination...",
      umlSequenceDiagram: `
      @startuml
actor User
participant "Smart Contract (ACL)" as ACL
participant "LinkedTable" as LinkedTable

User -> ACL: Call get_permission(ACL_instance, target_address)
activate ACL

ACL -> LinkedTable: Check if target_address exists in permissions
activate LinkedTable
LinkedTable --> ACL: True/False (address_found)
deactivate LinkedTable

alt address_found is False
    ACL --> ACL: Set permission_level = 0
    ACL --> User: Return 0
else address_found is True
    ACL -> LinkedTable: Borrow permission value for target_address
    activate LinkedTable
    LinkedTable --> ACL: permission_value (u128)
    deactivate LinkedTable
    ACL --> User: Return permission_value
end
deactivate ACL
@enduml
      `
    };

