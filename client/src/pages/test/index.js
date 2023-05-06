import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../config/Axios'


const Test = () => {
  const { data, isLoading, isError, error } = useQuery('testdata', async () => {

    const res = await axios.get('http://desktop-af6lkcc:8048/BC140/ODatav4/Company(\'CM%20copy%20test\')/TopCustomerOverview', {
      headers: {
        'Authorization':'Basic YWJvdWRpOkFib3VkaTEyMys='
      },


    })

    return res.data
  })

  if (isError) {
    console.log(error)
    return <h1>Error</h1>
  }
  if (isLoading) return <h1>Loading...</h1>
  console.log(data)


  return (
    data.value.map((e, i) => (
      <div key={i} style={{
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "rgb(245,245,245)"
      }}>
        <h1>Name : {e.Name}</h1>
        <h1>No : {e.No}</h1>
        <h1>City : {e.City}</h1>
        <h1>Salesperson Name : {e.SalesPersonName}</h1>
        <h1>Salesperson Code : {e.Salesperson_Code}</h1>
        <h1>Country Region Name : {e.CountryRegionName}</h1>
      </div>
    ))
  )
}

export default Test