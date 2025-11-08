'use server';

import {
  explainContractFunction,
  type ExplainContractFunctionInput,
  type ExplainContractFunctionOutput,
} from '@/ai/flows/explain-contract-function';

export async function getFunctionExplanation(
  input: ExplainContractFunctionInput
): Promise<{ data: ExplainContractFunctionOutput | null; error: string | null }> {
  try {
    const result = await explainContractFunction(input);
    return { data: result, error: null };
  } catch (e) {
    console.error('Error explaining contract function:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred while explaining the function.';
    return { data: null, error: errorMessage };
  }
}
