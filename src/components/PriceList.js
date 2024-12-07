import React, { useState } from 'react';
import { Pagination, Button } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const PriceList = () => {
  const maleServices = [
    { service: 'SHIRT', price: 250 },
    { service: 'PANTS', price: 300 },
    { service: 'JEANS(TROUSER)', price: 500 },
    { service: 'SUIT(2PIECE)', price: 1000 },
    { service: 'SUIT(3PIECE)', price: 1500 },
    { service: 'T-SHIRT', price: 300 },
    { service: 'SHORT', price: 300 },
    { service: 'JEAN(JACKET)', price: 800 },
    { service: 'SWEATSHIRT WITH PANTS', price: 1000},
    { service: 'JACKET', price: 350 },
    { service: 'CHINOS', price: 500 },
    { service: 'BUBA & SOKOTO(ADOLESCENT)', price: 800 },
    { service: 'KIDDIES SUIT (2PIECE)', price: 1000},
    { service: 'BUBA & SOKOTO', price: 1000 },
    { service: 'BUBA ONLY (DRYCLEAN)', price: 1000 },
    { service: 'OVERALL (DRYCLEAN)', price: 800 },
    { service: 'SOKOTO ONLY (DRYCLEAN)', price: 1000 },
    { service: 'TIE', price: 200 },
    { service: 'SHORT ROBE', price: 800 },
    { service: 'LONG COAT', price: 1500 },
    { service: 'LONG ROBE', price: 1500 },
    { service: 'NATIVE (DRYCLEAN ONLY)', price: 2000 },
    { service: 'BUBA & SOKOTO (TODDLER)', price: 500 },
    { service: 'OVERALL', price: 400 },
    { service: 'WAIST COAT', price: 350 },
    { service: 'BUBA', price: 400 },
    { service: 'SOKOTO', price: 400 },
    { service: 'CARDIGAN/SWEATSHIRT', price: 600 },
    { service: 'SHIRT (DEYCLEAN)', price: 500 },
    { service: 'SWEATPANTS/JOGGERS', price: 400 },
    { service: 'TROUSER', price: 300 },
    { service: 'HOOD', price: 500 },

  ];

  const femaleServices = [
    { service: '3-PIECE SUIT', price: 1600 },
    { service: 'BUBU', price: 1000 },
    { service: 'BLOUSE', price: 400 },
    { service: 'BUBA ONLY', price: 500 },
    { service: 'CAMISOLE', price: 350 },
    { service: 'CARDIGAN', price: 500 },
    { service: 'DRESS', price: 1000 },
    { service: 'DRESS & JACKET', price: 1300 },
    { service: 'EVENING DRESS', price: 1100 },
    { service: 'GOWN(JEANS)', price: 1000 },
    { service: 'IPELE & IBORUN', price: 400 },
    { service: 'IRO & BUBA', price: 900 },
    { service: 'JACKET', price: 800 },
    { service: 'JACKET (JEANS)', price: 1000 },
    { service: 'JUMPSUIT', price: 600 },
    { service: 'JUMPSUIT(JEANS)', price: 1300 },
    { service: 'LADIES TOP', price: 400 },
    { service: 'LONG COAT', price: 1000 },
    { service: 'SCARF/SHAWL/MUFFLER', price: 400 },
    { service: 'SHIRT (DRYCLEAN)', price: 500 },
    { service: 'SHIRT DRESS', price: 600 },
    { service: 'SHIRT', price: 400 },
    { service: 'SHORT DRESS', price: 800 },
    { service: 'SHORT', price: 300 },
    { service: 'SKIRT', price: 500 },
    { service: 'SKIRT & BLOUSE', price: 1200 },
    { service: 'SKIRT (JEANS)', price: 900 },
    { service: 'SKIRT (PLEATED)', price: 1000 },
    { service: 'SKIRT SUIT', price: 900 },
    { service: 'SUIT', price: 1000 },
    { service: 'SUIT-2PC', price: 1200 },
    { service: 'SWEATSHIRT/JOGGERS', price: 500 },
    { service: 'SWEATSHIRT & PANT/SKIRT', price: 900 },
    { service: 'SWEATSHIRT ONLY', price: 600 },
    { service: 'T-SHIRT', price: 400 },
    { service: 'TROUSER', price: 600 },
    { service: 'TROUSER (CHINOS)', price: 700 },
    { service: 'TROUSER (DRYCLEAN)', price: 1100 },
    { service: 'TROUSER SUIT', price: 1000 },
    { service: 'TROUSER (JEANS)', price: 1000 },
    { service: 'WEDDING DRESS (2-PIECE)', price: 15000 },
    { service: 'WEDDING DRESS', price: 10000 },
    { service: 'WEDDING VEIL-LONG', price: 3000 },
    { service: 'WEDDING VEIL-SHORT', price: 1400 },
  ];

const laundryServices = [
    { service: 'BATH-ROBE', price: 1000 },
    { service: 'BED SHEETS', price: 1200 },
    { service: 'BLANKET SMALL', price: 1200 },
    { service: 'DUVET', price: 2000 },
    { service: 'DUVET COVER', price: 1300 },
    { service: 'PILOW CASE', price: 250 },
    { service: 'TOWELS', price: 900 },
];

const curtainServices = [
    { service: 'HEAVY (PER SQUARE YARD)', price: 600 },
    { service: 'LIGHT (PER SQUARE YARD)', price: 500 },
    { service: 'Vest', price: 300 },
];

const repairsServices = [
    { service: 'COLLAR/CUFF ALTERATION', price: 1000 },
    { service: 'HIP ADJUSTMENT', price: 1500 },
    { service: 'LENGTH ADJUSTMENT/TURN-UP', price: 1500 },
    { service: 'STITCHES', price: 800 },
    { service: 'WAIST ADJUSTMENT', price: 1500 },
    { service: 'ZIP', price: 1000 },
]


  const [currentMalePage, setCurrentMalePage] = useState(1);
  const [currentFemalePage, setCurrentFemalePage] = useState(1);
  const [curerntLaundryPage, setCurrentLaundryPage] = useState(1);
  const [currentCurtainsPage, setCurrentCurtainsPage] = useState(1);
  const [currentRepairsPage, setCurrentRepairsPage] = useState(1);
  const [maleSortOrder, setMaleSortOrder] = useState('asc');
  const [femaleSortOrder, setFemaleSortOrder] = useState('asc');
  const [laundrySortOrder, setLaundrySortOrder] = useState('asc');
  const [curtainSortOrder, setCurtainSortOrder] = useState('asc');
  const [repairSortOrder, setRepairSortOrder] = useState('asc');
  const [isClicked, setIsClicked] = useState(false);
  const itemsPerPage = 10;

  const totalMalePages = Math.ceil(maleServices.length / itemsPerPage);
  const totalFemalePages = Math.ceil(femaleServices.length / itemsPerPage);
  const totalLaundryPages = Math.ceil(laundryServices.length / itemsPerPage);
  const totalCurtainsPages = Math.ceil(curtainServices.length / itemsPerPage);
  const totalRepairsPages = Math.ceil(repairsServices.length / itemsPerPage);
//   const totalRepairsPages = Math.ceil(repairServices.length / itemsPerPage);

  const handleMalePageChange = (pageNumber) => {
    setCurrentMalePage(pageNumber);
  };

  const handleFemalePageChange = (pageNumber) => {
    setCurrentFemalePage(pageNumber);
  };

  const handleLaundryPageChange = (pageNumber) => {
    setCurrentLaundryPage(pageNumber);
  }

  const handleCurtainPageChange = (pageNumber) => {
    setCurrentCurtainsPage(pageNumber);
  }

  const handleRepairPageChange = (pageNumber) => {
    setCurrentRepairsPage(pageNumber);
  }

  const handleMaleSort = () => {
    setMaleSortOrder(maleSortOrder === 'asc' ? 'desc' : 'asc');
    setIsClicked(!isClicked);
  };

  const handleFemaleSort = () => {
    setFemaleSortOrder(femaleSortOrder === 'asc' ? 'desc' : 'asc');
    setIsClicked(!isClicked);
  };

  const handleLaundrySort = () => {
    setLaundrySortOrder(laundrySortOrder === 'asc' ? 'dec' : 'asc');
    setIsClicked(!isClicked);
  }
  const handleCurtainSort = () => {
    setCurtainSortOrder(curtainSortOrder === 'asc' ? 'dec' : 'asc');
    setIsClicked(!isClicked);
  }
  const handleRepairSort = () => {
    setRepairSortOrder(repairSortOrder === 'asc' ? 'dec' : 'asc');
    setIsClicked(!isClicked);
  }

  const sortedMaleServices = [...maleServices].sort((a, b) => (maleSortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  const sortedFemaleServices = [...femaleServices].sort((a, b) => (femaleSortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  const sortedLaundryServices = [...laundryServices].sort((a, b) => (laundrySortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  const sortedCurtainServices = [...curtainServices].sort((a, b) => (curtainSortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  const sortedRepairServices = [...repairsServices].sort((a, b) => (repairSortOrder === 'asc' ? a.price - b.price : b.price - a.price));
//   const sortedRepairServices = [...repairServices].sort((a, b) => (repairSortOrder === 'asc' ? a.price - b.price : b.price - a.price));


  const maleDisplayedItems = sortedMaleServices.slice((currentMalePage - 1) * itemsPerPage, currentMalePage * itemsPerPage);
  const femaleDisplayedItems = sortedFemaleServices.slice((currentFemalePage - 1) * itemsPerPage, currentFemalePage * itemsPerPage);
  const laundryDisplayedItems = sortedLaundryServices.slice((curerntLaundryPage - 1) * itemsPerPage, curerntLaundryPage * itemsPerPage);
  const curtainDisplayedItems = sortedCurtainServices.slice((currentCurtainsPage - 1) * itemsPerPage, currentCurtainsPage * itemsPerPage);
  const repairDisplayedItems = sortedRepairServices.slice((currentRepairsPage - 1) * itemsPerPage, currentRepairsPage * itemsPerPage);



  return (
    <div className='container price-list-page'>
        <div className='row'>
            <div className=''>
            <h1 className='price-label'>PRICE LIST</h1>
        <h2>Male</h2>
        <Button onClick={handleMaleSort} className={isClicked ? 'clicked' : ''}>
            Sort by Price: {maleSortOrder === 'asc' ? 'Lowest to Highest' : 'Highest to Lowest'}
        </Button>
        <Table className='table table-bordered mt-2' border={7} striped hover>
            <thead>
            <tr>
                <th>Services</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {maleDisplayedItems.map((item, index) => (
                <tr key={index}>
                <td>{item.service}</td>
                <td><i className='fas fa-money-bill-wave'></i>₦{item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        <Pagination >
            {Array.from({ length: totalMalePages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentMalePage} onClick={() => handleMalePageChange(index + 1)} style={{background: index + 1 === currentMalePage ? 'green' : ''}} >
                {index + 1}
            </Pagination.Item>
            ))}
        </Pagination>

        <br />
        <h2>Female</h2>
        <Button onClick={handleFemaleSort}>
            Sort by Price: {femaleSortOrder === 'asc' ? 'Lowest to Highest' : 'Highest to Lowest'}
        </Button>
        <Table className='table table-bordered mt-2' border={7} striped hover>
            <thead>
            <tr>
                <th>Services</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {femaleDisplayedItems.map((item, index) => (
                <tr key={index}>
                <td>{item.service}</td>
                <td>₦{item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        <Pagination>
            {Array.from({ length: totalFemalePages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentFemalePage} onClick={() => handleFemalePageChange(index + 1)}>
                {index + 1}
            </Pagination.Item>
            ))}
        </Pagination>
        <br />
        <h2>Laundry</h2>
        <Button onClick={handleLaundrySort}>
            Sort by Price: {laundrySortOrder === 'asc' ? 'Lowest to Highest' : 'Highest to Lowest'}
        </Button>
        <Table className='table table-bordered mt-2' striped hover>
            <thead>
            <tr>
                <th>Services</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {laundryDisplayedItems.map((item, index) => (
                <tr key={index}>
                <td>{item.service}</td>
                <td>₦{item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        {totalLaundryPages > 1 && (
         <Pagination>
            {Array.from({ length: totalLaundryPages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === curerntLaundryPage} onClick={() => handleLaundryPageChange(index + 1)}>
                {index + 1}
            </Pagination.Item>
            ))}
        </Pagination>
        )}
        <br />
        <h2>Curtains</h2>
        <Button onClick={handleCurtainSort}>
            Sort by Price: {curtainSortOrder === 'asc' ? 'Lowest to Highest' : 'Highest to Lowest'}
        </Button>
        <Table className='table table-bordered mt-2' striped hover>
            <thead>
            <tr>
                <th>Services</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {curtainDisplayedItems.map((item, index) => (
                <tr key={index}>
                <td>{item.service}</td>
                <td>₦{item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        {totalCurtainsPages > 1 && (
             <Pagination>
                {Array.from({ length: totalCurtainsPages }, (_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === currentCurtainsPage} onClick={() => handleCurtainPageChange(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
            )}
        <br />
        <h2>Repairs & Alterations</h2>
        <Button onClick={handleRepairSort}>
            Sort by Price: {repairSortOrder === 'asc' ? 'Lowest to Highest' : 'Highest to Lowest'}
        </Button>
        <Table className='table table-bordered mt-2' striped hover>
            <thead>
            <tr>
                <th>Services</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {repairDisplayedItems.map((item, index) => (
                <tr key={index}>
                <td>{item.service}</td>
                <td>₦{item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
            {totalRepairsPages > 1 && (
                <Pagination>
                 {Array.from({ length: totalRepairsPages }, (_, index) => (
                 <Pagination.Item key={index + 1} active={index + 1 === currentRepairsPage} onClick={() => handleRepairPageChange(index + 1)}>
                     {index + 1}
                 </Pagination.Item>
                 ))}
             </Pagination>
            )}
            </div>
        </div>
    </div>
  );
};

export default PriceList;