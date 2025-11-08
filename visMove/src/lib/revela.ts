import { SuiClient } from "@mysten/sui/client";
import {exec} from 'child_process';
import {writeFileSync} from 'fs';

type Network = 'mainnet' | 'testnet' | 'devnet';
export const getCodeMove = async (network: Network, packageId: string, moduleName: string) => {
    const client = new SuiClient({url: network});
    const response = await client.getObject({
        id: packageId,
        options: {
            showBcs: true
        }
    });
    const moduleMap: {[k: string]: string} = (response.data?.bcs as any).moduleMap;
    const mmap = new Map();
    for(const [k,v] of Object.entries(moduleMap)){
        mmap.set(k, v)
    }
    const moduleHashCode = mmap.get(moduleName);
    const byteString = atob(moduleHashCode);
    const bytes = new Uint8Array(byteString.length);
    for(let i=0; i<byteString.length; i++){
        bytes[i] = byteString.charCodeAt(i);
    }

    const asm = getAsm(bytes);
    const psudo = getPsudo(bytes);
}
const getAsm = (moduleBytes: Uint8Array): string => {
    const filePath = ''
    writeToFile(filePath, moduleBytes);
    exec(`sui move disassmble `, )
    return "";
}

const getPsudo = (moduleBytes: Uint8Array): string => {

    return "";
}

const writeToFile = (filePath, content: Uint8Array) => {
    try{
        writeFileSync(filePath, content);
    }
    catch (e){
        console.error(`Error writting to file ${filePath}: ${e}`)
    }
}