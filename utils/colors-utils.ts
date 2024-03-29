import { CHAINS } from "types/types"

type ChainColorsType = {
  bgColor: string
  textColor: string
}

export const getChainColors = (chainId: CHAINS): ChainColorsType => {
  return {
    bgColor: getBgColor(chainId),
    textColor: getTextColor(chainId)
  }  
}

const getBgColor = (chainId: CHAINS) => {
  if (chainId === CHAINS.SOLANA) {
    return "linear-gradient(253deg, #00FFA3, #DC1FFF)"
  } else if (chainId === CHAINS.AVALANCHE) {
    return "#e84141"
  } else if (chainId === CHAINS.THE_GRAPH) {
    return "linear-gradient(130deg, #5943d0, #151324)"
  } else if (chainId === CHAINS.POLYGON) {
    return "#8247e5"
  } else if (chainId === CHAINS.POLKADOT) {
    return "#e6007a"
  } else if (chainId === CHAINS.TEZOS) {
    return "#0f62ff"
  } else if (chainId === CHAINS.CELO) {
    return "linear-gradient(253deg, rgb(251, 204, 92), rgb(53,208,127))"
  } else if (chainId === CHAINS.NEAR) {
    return "linear-gradient(253deg, #00c1de, #00c08b)"
  } else if (chainId === CHAINS.SECRET) {
    return "black"
  }

  return "rgb(255, 242, 155)"
}

const getTextColor = (chainId: CHAINS) => {
  if (chainId === CHAINS.SOLANA) {
    return "black"
  } else if (chainId === CHAINS.AVALANCHE) {
    return "#F6F6F6"
  } else if (chainId === CHAINS.THE_GRAPH) {
    return "#F6F6F6"
  } else if (chainId === CHAINS.POLYGON) {
    return "#F6F6F6"
  } else if (chainId === CHAINS.POLKADOT) {
    return "#F6F6F6"
  } else if (chainId === CHAINS.TEZOS) {
    return "#F6F6F6"
  } else if (chainId === CHAINS.SECRET) {
    return "white"
  } else if (chainId === CHAINS.NEAR) {
    return "white"
  }
  return "black"
}