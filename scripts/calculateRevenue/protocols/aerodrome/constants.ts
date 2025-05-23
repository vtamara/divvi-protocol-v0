import { Address } from 'viem'
import { NetworkId } from '../../../types'

export const AERODROME_SUPPORTED_LIQUIDITY_POOL_ADDRESSES: Address[] = [
  '0xb2cc224c1c9feE385f8ad6a55b4d94E92359DC59', // WETH/USDC
  '0xA44D3Bb767d953711EA4Bce8C0F01f4d7D299aF6', // cbBTC/LBTC
  '0x4e962BB3889Bf030368F56810A9c96B83CB3E778', // USDC/cbBTC
  '0x70aCDF2Ad0bf2402C957154f944c19Ef4e1cbAE1', // WETH/cbBTC
  '0xC200F21EfE67c7F41B81A854c26F9cdA80593065', // VIRTUAL/WETH
  '0x6446021F4E396dA3df4235C62537431372195D38', // WETH/superOETHb
]

export const AERODROME_NETWORK_ID = NetworkId['base-mainnet']

export const AERODROME_UNIVERSAL_ROUTER_ADDRESS =
  '0x6Cb442acF35158D5eDa88fe602221b67B400Be3E'
