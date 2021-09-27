import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import logo from './logo.svg';
import './App.css';
import {Card, Card1 }from './Card';
import Tabs from "./Tabs";


// function App() {

  const productsData = [
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'M'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 400,
      size: 'S'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 600,
      size: 'L'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'M'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 400,
      size: 'S'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'M'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'M'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'M'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 400,
      size: 'S'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'L'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 500,
      size: 'XL'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661',
      inStore: false,
      inStoreVal: '',
      price: 1500,
      size: 'XXL'
    }
    
  ];
  const data = [
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true,
      discount: true,
      discountVal: '30%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
      
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      inStoreVal: '',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: false,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: true
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579',
      inStore: false,
      discount: true,
      discountVal: '20%'
    },
   
  ];

  class App extends React.Component {
    state = {
      items: Array.from({ length: 20 })
    };
 fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 3000);
  };
  render() {
  return (
<>
      {/* <div className="header"></div> */}
      <div className="App">
      <Tabs>
        <div label="Store">
          <input type="text" placeholder="Store Name or Product Name" />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        {this.state.items.map((i, index) => (
          // data && data.map((item) => <Card {...item} />)
          
          <Card {...data[index]}  key={index}/>
        ))}
        </InfiniteScroll>
        </div>
        <div label="Products">
        <input type="text" placeholder="Store Name or Product Name" />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        {this.state.items.map((i, index) => (
          // data && data.map((item) => <Card {...item} />)
          
          <Card1 {...productsData[index]}  key={index}/>
        ))}
        </InfiniteScroll>
        </div>
       
      </Tabs>
      
      </div>
    </>
  );
}
// render(<App />, document.getElementById("root"));
  }
export default App;
