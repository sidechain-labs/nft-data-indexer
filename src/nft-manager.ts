import {
  NFTCreate as NFTCreateEvent,
  NFTDetail as NFTDetailEvent,
  NFTTransfer as NFTTransferEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdateWhitelistAddress as UpdateWhitelistAddressEvent
} from "../generated/NFTManager/NFTManager"
import {
  NFTCreate,
  NFTDetail,
  NFTTransfer,
  OwnershipTransferred,
  UpdateWhitelistAddress
} from "../generated/schema"

export function handleNFTCreate(event: NFTCreateEvent): void {
  let entity = new NFTCreate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.nftAddress = event.params.nftAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTDetail(event: NFTDetailEvent): void {
  let entity = new NFTDetail(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.description = event.params.description
  entity.basePrice = event.params.basePrice
  entity.isListed = event.params.isListed
  entity.documents = event.params.documents
  entity.imageUri = event.params.imageUri
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTTransfer(event: NFTTransferEvent): void {
  let entity = new NFTTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sellerAddress = event.params.sellerAddress
  entity.buyerAddress = event.params.buyerAddress
  entity.nftAddress = event.params.nftAddress
  entity.isTransfer = event.params.isTransfer
  entity.sellingPrice = event.params.sellingPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateWhitelistAddress(
  event: UpdateWhitelistAddressEvent
): void {
  let entity = new UpdateWhitelistAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.whitelistAddress = event.params.whitelistAddress
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
