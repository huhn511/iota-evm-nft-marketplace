import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import { useRouter } from 'next/router'

import {
    nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import IOTABOTS from '../artifacts/contracts/IOTABOTS.json'

export default function MyAssets() {

    const [formInput, updateFormInput] = useState({ price: '' })
    const router = useRouter()

    const [signer, setSigner] = useState([])
    const [nfts, setNfts] = useState([])
    const [current_nft] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
    useEffect(() => {
        loadNFTs()
    }, [])

    async function sell_asset(nft) {

        alert("available soon :-)")
        return;
        // const web3Modal = new Web3Modal()
        // const connection = await web3Modal.connect()
        // const provider = new ethers.providers.Web3Provider(connection)
        // const signer = provider.getSigner()

        console.log("nft", nft)


        console.log("formInput.price", formInput.price)
        const price = ethers.utils.parseUnits(formInput.price, 'ether')
        console.log("price", price)
        console.log("signer", signer)

        /* then list the item for sale on the marketplace */
        let contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        console.log("contract", contract)
        let listingPrice = await contract.getListingPrice()
        console.log("listingPrice", listingPrice)
        listingPrice = listingPrice.toString()
        console.log("listingPrice2", listingPrice)

        const data = await contract.fetchMarketItems()
        console.log("data", data)

        let iotabots_address = "0x2f6EFb05Dd92Af605184199296979979379Ecbd3"
        console.log("nftaddress", iotabots_address) // string
        console.log("tokenId", nft.id) // number
        console.log("price", price) // BigNumber
        console.log("price2", price.toString()) // BigNumber
        console.log("listingPrice", listingPrice) // String

        try {
            transaction = await contract.createMarketItem(iotabots_address, nft.id, price, { value: listingPrice })
            console.log("x", x)
            let res = await transaction.wait()
            console.log("res", res)
        } catch (error) {
            console.log("error", error)
        }

        // router.push('/')
    }

    async function loadNFTs() {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
        })
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        setSigner(signer)
        const address = await signer.getAddress()
        console.log("provider:", provider)
        console.log("signer:", signer)
        // const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        const tokenContract = new ethers.Contract("0x2f6EFb05Dd92Af605184199296979979379Ecbd3", IOTABOTS, provider)
        console.log("tokenContract:", tokenContract)


        const data = await tokenContract.walletOfOwner(address)
        console.log("data:", data)


        const items = await Promise.all(data.map(async i => {
            let token_index = i.toNumber()
            console.log("token_index:", token_index)
            console.log("token_index2:", token_index.toString())


            // const token = await tokenContract.tokenByIndex("4")

            const url = `https://assets.iotabots.io/${token_index}`
            const meta = await axios.get(url)

        
            //   let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            console.log("meta:", meta)

            let date = new Date(meta.data.date)
            let item = {
                // tokenId: i.tokenId.toNumber(),
                // seller: i.seller,
                // owner: i.owner,
                id: token_index,
                name: meta.data.name,
                description: meta.data.description,
                date: date.toLocaleDateString(),
                dna: meta.data.dna,
                edition: meta.data.edition,
                image: meta.data.image
            }
            return item
        }))
        setNfts(items)
        setLoadingState('loaded')
    }
    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
    return (
        <div className="flex justify-center">
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    {
                        nfts.map((nft, i) => (
                            <div key={i} className="border shadow rounded-xl overflow-hidden">
                                <img src={nft.image} className="rounded" />
                                <div className="p-4 bg-black">
                                    <p className="text-2xl font-bold text-white">IOTABOT {nft.name}</p>
                                    <p className="text-xs font-bold text-white">{nft.description}</p>
                                    <p className="text-xs font-bold text-white">EDITION: {nft.edition}</p>
                                    <p className="text-xs font-bold text-white">DNA: {nft.dna}</p>
                                    <p className="text-xs font-bold text-white">ID: {nft.id}</p>
                                    <p className="text-xs font-bold text-white">Created: - {nft.date}</p>

                                    <input
                                        placeholder="Asset Price in MIOTA"
                                        className="mt-2 border rounded p-4"
                                        onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
                                    />
                                    <button onClick={() => sell_asset(nft)} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
                                        Sell
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}