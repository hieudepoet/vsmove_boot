import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';


export const mockFunction = `
public has_role(Arg0: &ACL, Arg1: address, Arg2: u8): bool {
L3:	loc0: bool
B0:
	0: CopyLoc[2](Arg2: u8)
	1: LdU8(128)
	2: Lt
	3: BrFalse(5)
B1:
	4: Branch(9)
B2:
	5: MoveLoc[0](Arg0: &ACL)
	6: Pop
	7: LdConst[0](u64: 0)
	8: Abort
B3:
	9: CopyLoc[0](Arg0: &ACL)
	10: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	11: CopyLoc[1](Arg1: address)
	12: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	13: BrFalse(27)
B4:
	14: MoveLoc[0](Arg0: &ACL)
	15: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	16: MoveLoc[1](Arg1: address)
	17: Call linked_table::borrow<address, u128>(&LinkedTable<address, u128>, address): &u128
	18: ReadRef
	19: LdU128(1)
	20: MoveLoc[2](Arg2: u8)
	21: Shl
	22: BitAnd
	23: LdU128(0)
	24: Gt
	25: StLoc[3](loc0: bool)
	26: Branch(31)
B5:
	27: MoveLoc[0](Arg0: &ACL)
	28: Pop
	29: LdFalse
	30: StLoc[3](loc0: bool)
B6:
	31: MoveLoc[3](loc0: bool)
	32: Ret
}
`
export const mockContractCode = `
// Move bytecode v6
module 1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb.acl {
use be21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::linked_table;
use 0000000000000000000000000000000000000000000000000000000000000001::option;
use 0000000000000000000000000000000000000000000000000000000000000002::tx_context;

struct ACL has store {
	permissions: LinkedTable<address, u128>
}

struct Member has copy, drop, store {
	address: address,
	permission: u128
}

public new(Arg0: &mut TxContext): ACL {
B0:
	0: MoveLoc[0](Arg0: &mut TxContext)
	1: Call linked_table::new<address, u128>(&mut TxContext): LinkedTable<address, u128>
	2: Pack[0](ACL)
	3: Ret
}

public has_role(Arg0: &ACL, Arg1: address, Arg2: u8): bool {
L3:	loc0: bool
B0:
	0: CopyLoc[2](Arg2: u8)
	1: LdU8(128)
	2: Lt
	3: BrFalse(5)
B1:
	4: Branch(9)
B2:
	5: MoveLoc[0](Arg0: &ACL)
	6: Pop
	7: LdConst[0](u64: 0)
	8: Abort
B3:
	9: CopyLoc[0](Arg0: &ACL)
	10: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	11: CopyLoc[1](Arg1: address)
	12: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	13: BrFalse(27)
B4:
	14: MoveLoc[0](Arg0: &ACL)
	15: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	16: MoveLoc[1](Arg1: address)
	17: Call linked_table::borrow<address, u128>(&LinkedTable<address, u128>, address): &u128
	18: ReadRef
	19: LdU128(1)
	20: MoveLoc[2](Arg2: u8)
	21: Shl
	22: BitAnd
	23: LdU128(0)
	24: Gt
	25: StLoc[3](loc0: bool)
	26: Branch(31)
B5:
	27: MoveLoc[0](Arg0: &ACL)
	28: Pop
	29: LdFalse
	30: StLoc[3](loc0: bool)
B6:
	31: MoveLoc[3](loc0: bool)
	32: Ret
}

public set_roles(Arg0: &mut ACL, Arg1: address, Arg2: u128) {
B0:
	0: CopyLoc[0](Arg0: &mut ACL)
	1: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	2: CopyLoc[1](Arg1: address)
	3: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	4: BrFalse(12)
B1:
	5: MoveLoc[2](Arg2: u128)
	6: MoveLoc[0](Arg0: &mut ACL)
	7: MutBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	8: MoveLoc[1](Arg1: address)
	9: Call linked_table::borrow_mut<address, u128>(&mut LinkedTable<address, u128>, address): &mut u128
	10: WriteRef
	11: Branch(17)
B2:
	12: MoveLoc[0](Arg0: &mut ACL)
	13: MutBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	14: MoveLoc[1](Arg1: address)
	15: MoveLoc[2](Arg2: u128)
	16: Call linked_table::push_back<address, u128>(&mut LinkedTable<address, u128>, address, u128)
B3:
	17: Ret
}

public add_role(Arg0: &mut ACL, Arg1: address, Arg2: u8) {
L3:	loc0: &mut u128
B0:
	0: CopyLoc[2](Arg2: u8)
	1: LdU8(128)
	2: Lt
	3: BrFalse(5)
B1:
	4: Branch(9)
B2:
	5: MoveLoc[0](Arg0: &mut ACL)
	6: Pop
	7: LdConst[0](u64: 0)
	8: Abort
B3:
	9: CopyLoc[0](Arg0: &mut ACL)
	10: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	11: CopyLoc[1](Arg1: address)
	12: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	13: BrFalse(28)
B4:
	14: MoveLoc[0](Arg0: &mut ACL)
	15: MutBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	16: MoveLoc[1](Arg1: address)
	17: Call linked_table::borrow_mut<address, u128>(&mut LinkedTable<address, u128>, address): &mut u128
	18: StLoc[3](loc0: &mut u128)
	19: CopyLoc[3](loc0: &mut u128)
	20: ReadRef
	21: LdU128(1)
	22: MoveLoc[2](Arg2: u8)
	23: Shl
	24: BitOr
	25: MoveLoc[3](loc0: &mut u128)
	26: WriteRef
	27: Branch(35)
B5:
	28: MoveLoc[0](Arg0: &mut ACL)
	29: MutBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	30: MoveLoc[1](Arg1: address)
	31: LdU128(1)
	32: MoveLoc[2](Arg2: u8)
	33: Shl
	34: Call linked_table::push_back<address, u128>(&mut LinkedTable<address, u128>, address, u128)
B6:
	35: Ret
}

public remove_role(Arg0: &mut ACL, Arg1: address, Arg2: u8) {
L3:	loc0: &mut u128
B0:
	0: CopyLoc[2](Arg2: u8)
	1: LdU8(128)
	2: Lt
	3: BrFalse(5)
B1:
	4: Branch(9)
B2:
	5: MoveLoc[0](Arg0: &mut ACL)
	6: Pop
	7: LdConst[0](u64: 0)
	8: Abort
B3:
	9: CopyLoc[0](Arg0: &mut ACL)
	10: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	11: CopyLoc[1](Arg1: address)
	12: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	13: BrFalse(28)
B4:
	14: MoveLoc[0](Arg0: &mut ACL)
	15: MutBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	16: MoveLoc[1](Arg1: address)
	17: Call linked_table::borrow_mut<address, u128>(&mut LinkedTable<address, u128>, address): &mut u128
	18: StLoc[3](loc0: &mut u128)
	19: CopyLoc[3](loc0: &mut u128)
	20: ReadRef
	21: LdU128(1)
	22: MoveLoc[2](Arg2: u8)
	23: Shl
	24: Sub
	25: MoveLoc[3](loc0: &mut u128)
	26: WriteRef
	27: Branch(30)
B5:
	28: MoveLoc[0](Arg0: &mut ACL)
	29: Pop
B6:
	30: Ret
}

public remove_member(Arg0: &mut ACL, Arg1: address) {
B0:
	0: CopyLoc[0](Arg0: &mut ACL)
	1: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	2: CopyLoc[1](Arg1: address)
	3: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	4: BrFalse(11)
B1:
	5: MoveLoc[0](Arg0: &mut ACL)
	6: MutBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	7: MoveLoc[1](Arg1: address)
	8: Call linked_table::remove<address, u128>(&mut LinkedTable<address, u128>, address): u128
	9: Pop
	10: Branch(13)
B2:
	11: MoveLoc[0](Arg0: &mut ACL)
	12: Pop
B3:
	13: Ret
}

public get_members(Arg0: &ACL): vector<Member> {
L1:	loc0: address
L2:	loc1: vector<Member>
L3:	loc2: Option<address>
L4:	loc3: &Node<address, u128>
B0:
	0: VecPack(22, 0)
	1: StLoc[2](loc1: vector<Member>)
	2: CopyLoc[0](Arg0: &ACL)
	3: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	4: Call linked_table::head<address, u128>(&LinkedTable<address, u128>): Option<address>
	5: StLoc[3](loc2: Option<address>)
B1:
	6: ImmBorrowLoc[3](loc2: Option<address>)
	7: Call option::is_some<address>(&Option<address>): bool
	8: BrFalse(30)
B2:
	9: Branch(10)
B3:
	10: ImmBorrowLoc[3](loc2: Option<address>)
	11: Call option::borrow<address>(&Option<address>): &address
	12: ReadRef
	13: StLoc[1](loc0: address)
	14: CopyLoc[0](Arg0: &ACL)
	15: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	16: CopyLoc[1](loc0: address)
	17: Call linked_table::borrow_node<address, u128>(&LinkedTable<address, u128>, address): &Node<address, u128>
	18: StLoc[4](loc3: &Node<address, u128>)
	19: MutBorrowLoc[2](loc1: vector<Member>)
	20: MoveLoc[1](loc0: address)
	21: CopyLoc[4](loc3: &Node<address, u128>)
	22: Call linked_table::borrow_value<address, u128>(&Node<address, u128>): &u128
	23: ReadRef
	24: Pack[1](Member)
	25: VecPushBack(22)
	26: MoveLoc[4](loc3: &Node<address, u128>)
	27: Call linked_table::next<address, u128>(&Node<address, u128>): Option<address>
	28: StLoc[3](loc2: Option<address>)
	29: Branch(6)
B4:
	30: MoveLoc[0](Arg0: &ACL)
	31: Pop
	32: MoveLoc[2](loc1: vector<Member>)
	33: Ret
}

public get_permission(Arg0: &ACL, Arg1: address): u128 {
L2:	loc0: u128
B0:
	0: CopyLoc[0](Arg0: &ACL)
	1: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	2: CopyLoc[1](Arg1: address)
	3: Call linked_table::contains<address, u128>(&LinkedTable<address, u128>, address): bool
	4: Not
	5: BrFalse(11)
B1:
	6: MoveLoc[0](Arg0: &ACL)
	7: Pop
	8: LdU128(0)
	9: StLoc[2](loc0: u128)
	10: Branch(17)
B2:
	11: MoveLoc[0](Arg0: &ACL)
	12: ImmBorrowField[0](ACL.permissions: LinkedTable<address, u128>)
	13: MoveLoc[1](Arg1: address)
	14: Call linked_table::borrow<address, u128>(&LinkedTable<address, u128>, address): &u128
	15: ReadRef
	16: StLoc[2](loc0: u128)
B3:
	17: MoveLoc[2](loc0: u128)
	18: Ret
}

Constants [
	0 => u64: 0
]
}

`
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: ImagePlaceholder;
}

const blogPostsData: Omit<BlogPost, 'image'>[] = [
  {
    slug: 'demystifying-smart-contracts',
    title: 'Demystifying Smart Contracts: A Beginner\'s Guide',
    author: 'Alex Johnson',
    date: '2024-07-22',
    excerpt: 'Dive into the world of smart contracts. What are they, how do they work, and why are they revolutionary? This guide breaks it down.',
    content: `
<p>Smart contracts are one of the most exciting and misunderstood concepts in the blockchain space. At their core, they are simply programs stored on a blockchain that run when predetermined conditions are met. They automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">How They Work</h3>
<p>Imagine a vending machine. You put in money (the condition), and the machine gives you a snack (the outcome). A smart contract works similarly but in the digital realm. It's a piece of code that lives on the blockchain and can control digital assets based on a set of rules.</p>
<p>This code is immutable (cannot be changed) and distributed (shared across the network), which means that once a smart contract is deployed, it will execute exactly as written, and no single party can alter it. This creates a high level of trust and security.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Why They Matter</h3>
<p>The implications are vast. Smart contracts can be used for:</p>
<ul class="list-disc list-inside space-y-2 my-4">
<li><strong>Decentralized Finance (DeFi):</strong> Automating lending, borrowing, and trading without banks.</li>
<li><strong>Supply Chain Management:</strong> Tracking goods from origin to destination with full transparency.</li>
<li><strong>Voting Systems:</strong> Creating secure and tamper-proof voting mechanisms.</li>
</ul>
<p>By removing the need for trusted intermediaries, smart contracts can make processes more efficient, transparent, and fair. Our app, Contract Clarity, helps you understand the code behind these powerful tools, making the technology accessible to everyone.</p>
    `,
  },
  {
    slug: 'understanding-sui-move',
    title: 'An Introduction to Sui Move for Developers',
    author: 'Samantha Lee',
    date: '2024-07-18',
    excerpt: 'Sui Move is a powerful language for writing safe and efficient smart contracts. This post covers the basics and what makes it unique.',
    content: `
<p>Sui Move is an object-centric smart contract language derived from the original Move language developed for the Diem blockchain. It's designed with a strong emphasis on safety, security, and performance, making it an excellent choice for building applications on the Sui blockchain.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Key Features of Sui Move</h3>
<p>What sets Sui Move apart from other smart contract languages like Solidity?</p>
<ul class="list-disc list-inside space-y-2 my-4">
<li><strong>Object-Centric Model:</strong> In Sui, everything is an object. This includes tokens, NFTs, and custom smart contract data. This model allows for parallel transaction processing, leading to high throughput and low latency.</li>
<li><strong>Ownership and Capabilities:</strong> Move has a robust type system that enforces ownership rules at the language level. An object can be owned by an address, another object, be shared, or be immutable. This prevents common bugs and vulnerabilities like re-entrancy attacks.</li>
<li><strong>Resource Safety:</strong> Move's "resource" types ensure that digital assets (like coins) cannot be accidentally duplicated or destroyed. They must be explicitly moved between owners, just like physical assets.</li>
</ul>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Getting Started</h3>
<p>To start writing Sui Move, you'll need the Sui CLI. The basic structure of a Move module involves defining structs (your objects) and functions that operate on them. Our app, Contract Clarity, is a great tool for analyzing existing Sui Move contracts, allowing you to see how functions interact and what they do through easy-to-understand UML diagrams.</p>
    `,
  },
  {
    slug: 'ai-in-blockchain-analysis',
    title: 'How AI is Revolutionizing Blockchain Analysis',
    author: 'Ben Carter',
    date: '2024-07-15',
    excerpt: 'Artificial Intelligence is transforming how we analyze and understand complex blockchain data, from fraud detection to code explanation.',
    content: `
<p>The intersection of Artificial Intelligence (AI) and blockchain is a hotbed of innovation. While blockchain provides a secure and transparent ledger, AI offers the power to analyze the vast amounts of data it contains, unlocking new insights and capabilities.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">AI for Smart Contract Auditing</h3>
<p>One of the most promising applications is in smart contract auditing. Manually auditing code for vulnerabilities is time-consuming and prone to human error. AI models can be trained to detect common security flaws, logical errors, and inefficiencies in smart contract code, providing an extra layer of security before deployment.</p>
<h3 class="font-headline text-xl font-semibold mt-6 mb-3">Simplifying Complexity with AI</h3>
<p>For non-developers, smart contracts can be intimidating black boxes. This is where tools like Contract Clarity come in. By leveraging Large Language Models (LLMs), we can translate complex code into human-readable explanations. Features like generating UML diagrams and identifying difficult concepts help bridge the knowledge gap, making blockchain more accessible to a wider audience.</p>
<p>This democratization of knowledge is crucial for the mainstream adoption of web3 technologies. When users can understand and trust the contracts they interact with, the entire ecosystem becomes safer and more robust.</p>
    `,
  },
];

export const mockBlogPosts: BlogPost[] = blogPostsData.map((post, index) => ({
  ...post,
  image: PlaceHolderImages[index % PlaceHolderImages.length],
}));
