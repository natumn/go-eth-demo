const config = require('config');
const Web3 = require('web3');

class Contract {
    constructor() {
        const web3 = new Web3();

        const PROVIDER = config.get("blockchain.endusers.PROVIDER");
        const ADDRESS = config.get("blockchain.endusers.ADDRESS");
        const MAX_GAS = config.get("blockchain.endusers.MAX_GAS");
        const ABI = config.get("blockchain.endusers.ABI");
        const CODE = config.get("blockchain.endusers.CODE");
        // RPCプロバイダの設定
        if (!web3.currentProvider) {
            web3.setProvider(new web3.providers.HttpProvider(PROVIDER));
        }
        this.contract = web3.eth.contract(ABI).at(ADDRESS);
    }
    currentProvider() {
        return web3.currentProvider.host;
    }
    //接続先ノードのマイニング状態の取得
    //マイニング中であればtrue、そうでなければfalse
    isMining() {
        return web3.eth.mining;
    }

    //接続先ノードのマイニングのハッシュレートを取得
    currentHashrate() {
        return web3.eth.hashrate;
    }

    //接続先ノードのピア数の取得
    currentPeerCount() {
        return web3.net.peerCount;
    }
}