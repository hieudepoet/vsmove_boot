import { suiNetwork } from "@/hooks/NetworkContext";
import axios from "axios";

// interface PackageCode {
//     codeMove: Map<String, String>
// }
// export let packageCode: PackageCode = {
//     codeMove: new Map()
// };
//Get all package move to fill <codeMove>
export const getPackageMove = async (pid: string, network: suiNetwork): Promise<Map<string, string>> => {
    const path = `http://localhost:5000/api/v1/expl/get_move_code?pid=${pid}&network=${network}`;
    try{
        const response = await axios.get(path);
        let packageCode = new Map();

        for(const [k, v] of Object.entries(response.data.data)){
            packageCode.set(k, v as string);
        }
        return packageCode;

    }
    catch(e) {console.error(e); return new Map();}
}
//Get function by packageId
export const getModuleMove = (packageCode: Map<string, string>, module_name: string) => {
    let code = packageCode.get(module_name);
    return code;
}
