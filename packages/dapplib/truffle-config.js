require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift recipe place mistake half praise army giant'; 
let testAccounts = [
"0x9fa0f0a42e65dcf113f52d6eb5a2226787ef59a1f5b0b8f4a1513606debd10f9",
"0xb93bbf38ec037fe0edaa7727363359c70a29b93fd266d1cb70f47015957988d4",
"0xff44ce75e77612c6fd7f7bc4b57c4659ad28f97ac484018fdaf3473687da56d9",
"0x3ab95c67f0b408f8c947080c9670b924a36b021bbf0d50b7d98cdbffa97bf330",
"0x015be234b9db3e68c51a025e6fa7b239a0f36295ad11fd2ef08a11a7d4f4dea3",
"0xc9870496d9e8b2f089003ce54d911d199fa6423973393e1a79ac3a9e7e015ab5",
"0xe8353d6489eaa2a8fe25cc7bf6d83b1e55ae8705605b61a277919dae75e9cf53",
"0x20ce58f2cd0a0f5b5868c36adea466ce4031f02b91ecd339121d26e557119060",
"0x6b7d30afe4adc769b287ec12d4f9da9f0862afd5a15a2d718d0327f4186a09a9",
"0x30b8c4bad796669a861bed94cc962d7ed7038877cb6fec37a3b8ff92a0d417a2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

