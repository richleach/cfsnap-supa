import { useState, useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Categories,  Header } from '../../../components/'
import Footer from '../../../components/Footer'
import { useRouter } from 'next/navigation'

function DrawTicket() {
    const winningTicket = [];
    while (winningTicket.length < 6) {
        let numPick = Math.floor(Math.random() * 48);
        if (numPick > 0 && (winningTicket.indexOf(numPick)) === -1) {
            winningTicket.push(numPick);
            numPick = 0;
        }
    }
    const inOrder = winningTicket.sort((a, b) => a - b);
    const printTicket = inOrder.join();
    return printTicket;
}

const LotterySimulator: NextPage = ({}) => {
    const router = useRouter();
    const [ticketInput, setTicketInput] = useState("");
    const [ticketNum, setTicketNum] = useState("");
    const [ticketList, setTicketList] = useState([]);
    const [winningTicket, setWinningTicket] = useState("");
    const [ballList, setBallList] = useState([]);
    //error trapping

    const [error, setError] = useState("");
    const [zeroCount, setZeroCount] = useState<number>(0);
    const [oneCount, setOneCount] = useState<number>(0);
    const [twoCount, setTwoCount] = useState<number>(0);
    const [threeCount, setThreeCount] = useState<number>(0);
    const [fourCount, setFourCount] = useState<number>(0);
    const [fiveCount, setFiveCount] = useState<number>(0);
    const [sixCount, setSixCount] = useState<number>(0);

    //ticket tally buckets
    let zerotCount = 0;
    let onetCount = 0;
    let twotCount = 0;
    let threetCount = 0;
    let fourtCount = 0;
    let fivetCount = 0;
    let sixtCount = 0; 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //error trapping
        //console.log("Target....");
        //console.log(e.target.tickets.value);
        if (!ticketInput) {
            setError("Sorry, no blanks allowed.");
            return;
        }
        if (ticketInput === " ") {
            setError("Sorry, no blanks allowed.");
            return;
        }
        if (ticketInput === "0") {
            setError("Sorry, 0 is not allowed.");
            return;
        }
        if (ticketInput < "1" ) {
            setError("Sorry, only positive numbers greater than 0 are allowed.");
            return;
        }
        if (isNaN(ticketInput)) {
            setError(
                "Sorry only numbers greater than 0 are allowed, no blanks either"
            );
            return;
        }
        if (ticketInput > 10000) {
            setError("...go put your kid's college fund back in the bank and limit the number of tickets to under 10,000");
            return;
        }
        
        setTicketNum(ticketInput); //console.log(ticketNum);
        setError('');
    
        //winning ticket
        const winningTicket = DrawTicket();
        //console.log(`winning ticket: ${winningTicket}`);
        //console.log(`Winner: ${winningTicket}`);
        setWinningTicket(winningTicket);
        const winningTicketSplit = winningTicket.split(',');
        
        let newballList = [];

        winningTicketSplit.forEach((item) => {
            newballList.push(<p key={2 + Math.random() * 100} className="inline-block pt-2 pr-2 m-2 text-center text-red-600 align-middle border-2 border-black shadow-md text-md md:text-2xl sm:align-middle decoration-4" 
            style={{height:"56px", width:"56px", borderRadius:"50%", alignItems: "center", justifyContent: "center"}}>&nbsp; {item} &nbsp;</p>)
        }) 
       /*  winningTicketSplit.forEach((item) => {
            newballList.push(<p key={2 + Math.random() * 100} className="items-center justify-center inline-block w-12 h-12 pt-2 pr-2 m-2 text-red-600 align-middle bg-yellow-400 border-2 border-black rounded-full text-md md:text-2xl sm:align-middle decoration-4" 
            style={{height:"56px", width:"56px", borderRadius:"50%", alignItems: "center", justifyContent: "center"}}>&nbsp; {item} &nbsp;</p>)
        })*/

        setBallList(newballList)

        let ticketTotal = 0;

        //loop over number of tickets "bought", compare against "winning" ticket
        for (let t = 0; t < ticketInput; t++) {
            //console.log(`current ticket number being processed: ${t}`);
            //numberCounter
            let numberCounter = 0;
            ticketTotal++;
            
            //draw my ticket
            let yourTicket = DrawTicket();
            //since we know there are always six numbers in each ticket the best (fastest) loop is the basic for loop

            let yourTicketSplit = yourTicket.split(','); 

            for (let i = 0; i < winningTicketSplit.length; i++) {
                
                if (yourTicketSplit.indexOf(winningTicketSplit[i]) !== -1) {
                    numberCounter = numberCounter + 1;
                }
                
            }

            //console.log(`numberCounter: ${numberCounter}`);

            if (numberCounter === 0) { zerotCount = zerotCount + 1 } else
            if (numberCounter === 1) { onetCount = onetCount + 1 } else 
            if (numberCounter === 2) { twotCount = twotCount + 1 } else 
            if (numberCounter === 3) { threetCount = threetCount + 1 } else
            if (numberCounter === 4) { fourtCount = fourtCount + 1 } else
            if (numberCounter === 5) { fivetCount = fivetCount + 1 } else
            if (numberCounter === 6) { sixtCount = sixtCount + 1 };


                /* console.log(`zero ${zerotCount}`);
                console.log(`one ${onetCount}`);
                console.log(`two ${twotCount}`);
                console.log(`three ${threetCount}`);
                console.log(`four ${fourtCount}`);
                console.log(`five ${fivetCount}`);
                console.log(`six ${sixtCount}`);  */
                
                setZeroCount(zerotCount);
                setOneCount(onetCount);
                setTwoCount(twotCount);
                setThreeCount(threetCount);
                setFourCount(fourtCount);
                setFiveCount(fivetCount);
                setSixCount(sixtCount);
            
            //build out the list of tickets for display
            
            ticketList.push(yourTicket);
            ticketList.push(<br key={yourTicket + Math.random() * 100} />);
            
            numberCounter = 0;

            //clear out form field for next use
            setTicketInput("");
        }
    };

  return (
    <div className="container px-10 mx-auto mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg'> 
          <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
            <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-3xl sm:align-middle'>Lottery Simulator</p>
          </div>
          </div>
          </div>

          <div className='p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
          <div className="container">
            <div className="showcase-form card">
                
                <strong>How It Works</strong><br />
                    Play the lottery (sort of) without spending any of your own money. This app simulates buying lottery tickets, drawing the winning numbers and then shows you how many of your tickets were winners (or not). This simulator is based on a standard 6 number state lottery game (not Powerball or other games where you need an additional winning ball to win the jackpot).<br /><br />
                    
                    This simulator uses Quick Picks to generate your tickets, meaning the lottery machine simply picks the numbers for your tickets randomly.<br /><br />
                    Most state lotteries draw 6 numbers from between 1 and 48 and you’ll need to match all 6 numbers to win the jackpot (although most states will award you with modest cash prizes for matching 5, 4 or even 3 out of the 6 numbers).<br /><br />
                    It couldn’t be easier, use the form to enter the number of tickets you want to "buy", then click the Draw! button to see what you won. Good luck!
            </div> 
            <br />
            <div className="content-center text-center">
            {!ticketNum.length ?
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="content-center form-control ">
                        <input
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none w-half focus:ring-2 focus:ring-gray-200"
                            type="text"
                            id="tickets"
                            placeholder="# of tickets to buy"
                            value={ticketInput}
                            onChange={({ target: { value } }) => {
                                setTicketInput(value);
                            }}
                        />{" "}
                        <input type="submit" value="Draw!" className="inline-block px-6 py-1 text-lg font-medium text-white transition duration-500 bg-blue-600 rounded-full cursor-pointer ease hover:bg-indigo-900" />
                    </div>
                    {error.length > 0 ? (
                        <h6 style={{ color: "red" }}> <br />{error} </h6>

                    ) : (
                            ""
                        )}
                </form>
                : 
                <button 
                    defaultValue="Play Again!" 
                    className="content-center inline-block px-4 py-1 text-lg font-medium text-center text-white bg-blue-600 border-0 rounded-full cursor-pointer w-25" 
                    onClick={() => router.refresh()}>
                        Play Again!
                        </button>
            }
            </div>
            {winningTicket.length ? 
            <div className="py-6">
                GREAT! You "bought" {ticketNum} tickets, and now here's the drawing for the winning numbers: <br /><br />
                <p className='p-2 pb-0 mb-0 font-semibold text-center text-red-600 text-md md:text-2xl sm:align-middle'>Tonight's Winning Lottery Numbers</p>
               
                    {/* {winningTicket.replace(/,/g, '   |   ')}<br /> */}
                    <div className="flex items-center justify-center">
                        {ballList}
                    </div>
                    
                

                                <h6 className='p-2 pb-0 mt-4 mb-0 font-semibold text-md md:text-xl sm:align-middle'>Let's check your tickets against the winning numbers:<br /> Of the {ticketNum} tickets you "bought".... </h6>
            </div>    
            : ' '
            }



            <table>
                {ticketNum.length ?
                    <thead>
                        
                        <tr>
                            {/* <td><strong># of matching tickets</strong></td>
                            <td><strong># out of 6 numbers</strong></td> */}
                            <td><strong>&nbsp;</strong></td>
                            <td><strong>&nbsp;</strong></td>
                        </tr>
                    </thead>
                    : <thead><tr><th colSpan='2'>&nbsp; </th></tr></thead>}

                {ticketNum.length ?
                    <tbody>
                        <tr>
                            <td colSpan='2'><strong>YOUR LOSERS</strong> (Sorry, these tickets aren't worth the paper they're printed on): </td>
                        </tr>
                        <tr>
                            <td>{zeroCount}<br /><br /></td>
                            <td className='text-left'>&nbsp; of your tickets didn't match any numbers <br /><br /></td>
                        </tr>
                        <tr>
                            <td colSpan='2'><strong>YOUR WINNERS</strong> Now we're talking! </td>
                        </tr>
                        <tr>
                            <td>{oneCount}</td>
                            <td className='text-left'>&nbsp; of your tickets matched 1 out of 6 winning numbers</td>
                        </tr>
                        <tr>
                            <td>{twoCount}</td>
                            <td className='text-left'>&nbsp; of your tickets matched 2 out of 6 winning numbers</td>
                        </tr>
                        <tr>
                            <td>{threeCount}</td>
                            <td className='text-left'>&nbsp; of your tickets matched 3 out of 6 winning numbers</td>
                        </tr>
                        <tr>
                            <td>{fourCount}</td>
                            <td className='text-left'>&nbsp; of your tickets matched 4 out of 6 winning numbers</td>
                        </tr>
                        <tr>
                            <td>{fiveCount}</td>
                            <td className='text-left'>&nbsp; of your tickets matched 5 out of 6 winning numbers</td>
                        </tr>
                        <tr>
                            <td>{sixCount}</td>
                            <td className='text-left'>&nbsp; of your tickets matched all winning numbers</td>
                        </tr>
                    </tbody>
                    : <tbody><tr><td>&nbsp;</td></tr></tbody>}
            </table>

            

            {ticketNum.length ? 
                <div>
                    < br /> Your tickets < br />
                </div> : ''}
                {ticketList.length ?
                <div>
                    <pre>{ticketList}</pre> 
                </div>
                : ''
                }
                
          </div>
          
        </div>
        </div>
        <div className='col-span-1 sm:col-span-4'>
            <div className='relative sm:sticky top-8'>

              <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
                  <h3 className="pb-4 mb-2 text-xl font-semibold border-b">Blog Categories</h3>
                  <Categories />
              </div>
            </div>
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )
  
}

export default LotterySimulator