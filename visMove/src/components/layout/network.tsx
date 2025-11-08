import { useNetwork } from '@/hooks/NetworkContext';
import { Network } from 'lucide-react';
import { useState } from 'react';

type Networks = 'mainnet' | 'testnet' | 'devnet';
export function Networks() {
    const {currNetwork, setCurrNetwork} = useNetwork();
    const [showNetworkMenu, setShowNetworkMenu] = useState(false);

    return (
        <div className="flex items-center space-x-4">
            <div className="relative">
                <button
                    onClick={() => setShowNetworkMenu(!showNetworkMenu)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <Network className="w-4 h-4" />
                    <span className="text-sm font-medium capitalize">{currNetwork}</span>
                </button>

                {showNetworkMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                        {(['mainnet', 'testnet', 'devnet'] as const).map((net) => (
                            <button
                                key={net}
                                onClick={() => {
                                    setCurrNetwork(net);
                                    setShowNetworkMenu(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${currNetwork === net ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <span className="capitalize">{net}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
