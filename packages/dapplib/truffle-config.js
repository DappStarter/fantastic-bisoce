require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million proof harvest opinion sugar slam'; 
let testAccounts = [
"0xaea9168cbf35d0cdabf5127a017ed3af62bcf43ab740ca2700c2343f063a9fef",
"0xfb2dcd8d3d089225cb84ac990e072cda2c7022556fba303a3d8a2b269d6823c6",
"0xe9f17a6a18cd4433db153937750385f3d093e470a1ca95d26352a58d7779e9ae",
"0x0951471d17b626639dc7c677074bcdb63595d97e40bcb22e2db5fc8b75cec4b8",
"0xe4e81ae6e36f268b4a8ade1820020e40adafaf10d48b99431ff38009bf642ae3",
"0x305a39df8ac741bb3e8a9828f2ce1c5f3368d42504a72b8ebc7418227d6305cb",
"0x17d9c13fba70f7f70bdca578ef213a42ac2379e51ac8e1efc6bf35f83e4feaf8",
"0x35904201522002a2b7d3ba181912a0a607aedeea1eea80a2259cfb90e36d3c36",
"0xec08beb539d79afe62f56a2f128c138ff7fd8d343c45f2781b6d565af1cbd5ca",
"0x0b6a0a18f2bd3d762e0a25e63d33df2ec05294289eec2ff6f12adcf9f5b3ed00"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

