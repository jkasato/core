import { Interfaces } from "@arkecosystem/crypto";
import { INetworkState } from "./network-state";

export interface INetworkStatus {
    forked: boolean;
    blocksToRollback?: number;
}

export interface INetworkMonitor {
    start(options): Promise<INetworkMonitor>;
    updateNetworkStatus(networkStart?: boolean): Promise<void>;
    cleanPeers(fast?: boolean, forcePing?: boolean): Promise<void>;
    discoverPeers(): Promise<void>;
    getNetworkHeight(): number;
    getNetworkState(): Promise<INetworkState>;
    refreshPeersAfterFork(): Promise<void>;
    checkNetworkHealth(): Promise<INetworkStatus>;
    isColdStartActive(): boolean;
    syncWithNetwork(fromBlockHeight: number): Promise<any>;
    broadcastBlock(block: Interfaces.IBlock): Promise<void>;
    broadcastTransactions(transactions: Interfaces.ITransaction[]): Promise<any>;
    getServer(): any;
    setServer(server: any): void;
    resetSuspendedPeers(): Promise<void>;
}
