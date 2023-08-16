import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NFTCreate,
  NFTDetail,
  NFTTransfer,
  OwnershipTransferred,
  UpdateWhitelistAddress
} from "../generated/NFTManager/NFTManager"

export function createNFTCreateEvent(
  creator: Address,
  nftAddress: Address
): NFTCreate {
  let nftCreateEvent = changetype<NFTCreate>(newMockEvent())

  nftCreateEvent.parameters = new Array()

  nftCreateEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  nftCreateEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )

  return nftCreateEvent
}

export function createNFTDetailEvent(
  nftAddress: Address,
  name: string,
  symbol: string,
  description: string,
  basePrice: BigInt,
  isListed: boolean,
  documents: Array<string>,
  imageUri: string,
  tokenId: BigInt
): NFTDetail {
  let nftDetailEvent = changetype<NFTDetail>(newMockEvent())

  nftDetailEvent.parameters = new Array()

  nftDetailEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam(
      "basePrice",
      ethereum.Value.fromUnsignedBigInt(basePrice)
    )
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam("isListed", ethereum.Value.fromBoolean(isListed))
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam(
      "documents",
      ethereum.Value.fromStringArray(documents)
    )
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam("imageUri", ethereum.Value.fromString(imageUri))
  )
  nftDetailEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftDetailEvent
}

export function createNFTTransferEvent(
  sellerAddress: Address,
  buyerAddress: Address,
  nftAddress: Address,
  isTransfer: boolean,
  sellingPrice: BigInt
): NFTTransfer {
  let nftTransferEvent = changetype<NFTTransfer>(newMockEvent())

  nftTransferEvent.parameters = new Array()

  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "sellerAddress",
      ethereum.Value.fromAddress(sellerAddress)
    )
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "buyerAddress",
      ethereum.Value.fromAddress(buyerAddress)
    )
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "isTransfer",
      ethereum.Value.fromBoolean(isTransfer)
    )
  )
  nftTransferEvent.parameters.push(
    new ethereum.EventParam(
      "sellingPrice",
      ethereum.Value.fromUnsignedBigInt(sellingPrice)
    )
  )

  return nftTransferEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpdateWhitelistAddressEvent(
  whitelistAddress: Address,
  status: boolean
): UpdateWhitelistAddress {
  let updateWhitelistAddressEvent = changetype<UpdateWhitelistAddress>(
    newMockEvent()
  )

  updateWhitelistAddressEvent.parameters = new Array()

  updateWhitelistAddressEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistAddress",
      ethereum.Value.fromAddress(whitelistAddress)
    )
  )
  updateWhitelistAddressEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return updateWhitelistAddressEvent
}
