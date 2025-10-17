"use client"
import { useState, useEffect } from "react";

export default function Home() {

  const [allCampaigns, setAllCampaigns] = useState([])
  const [campaigns, setCampaigns] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  async function fetchData(){
    try {
      const response = await fetch(`${apiUrl}/campaigns`)
      if(response.ok){
        const data = await response.json();
        console.log(data)
        setCampaigns(data)
        setAllCampaigns(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  function handleStatusSelection(value){
    console.log(value==="All")
    if(value==="All"){ 
      console.log("setting to all",allCampaigns);
      setCampaigns(allCampaigns)
    }else{
      const filteredCampaigns = allCampaigns.filter(campaign => campaign.status===value)
      setCampaigns(filteredCampaigns)
    }
  }

  return (
    <>
    <header>
      <nav className="px-5 md:px-20 border-b border-blue-100 shadow-lg">
        <ul className="w-[100vw] h-12 flex gap-10 items-center text-xl font-semibold">
          <li>Dashboard</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </nav>
    </header>
    <main className="px-5 md:px-20 bg-gray-50">

    <h1 className="text-4xl font-semibold py-10">Campaigns Data</h1>
    <select 
      id="selection"
      onChange={(e) => handleStatusSelection(e.target.value)}
      className="border rounded-lg w-30 h-10"
    > 
      <option>All</option>
      <option value="active">Active</option>
      <option value="paused">Paused</option>
    </select>
      <div className="overflow-x-auto rounded-lg border border-gray-100 mt-10 min-w-[80vw]">
  <table className="min-w-full">
        <thead className="bg-gray-300 leading-10">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Clicks</th>
            <th className="px-4 py-2 text-left">Cost</th>
            <th className="px-4 py-2 text-left">Impressions</th>
          </tr>
        </thead>
        <tbody>
          { campaigns.map((campaign, index) => 
          <tr 
            key={campaign.id}
            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} 
                        hover:bg-gray-200 transition leading-10`}
          >
            <td className="px-4 py-2">{campaign.id}</td>
            <td className="px-4 py-2">{campaign.name}</td>
            <td className="px-4 py-2">{campaign.status}</td>
            <td className="px-4 py-2">{campaign.clicks}</td>
            <td className="px-4 py-2">{campaign.cost}</td>
            <td className="px-4 py-2">{campaign.impressions}</td>
          </tr>
        )}
        </tbody>
      </table>
      </div>
    </main>
    </>
  );
}
