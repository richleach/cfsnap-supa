import { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Categories, Header } from "../../../components/";
import Footer from "../../../components/Footer";
import { useRouter } from "next/navigation";

function DrawTicket() {
  const winningTicket = [];
  while (winningTicket.length < 6) {
    let numPick = Math.floor(Math.random() * 48);
    if (numPick > 0 && winningTicket.indexOf(numPick) === -1) {
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
  const [ticketCost, setTicketCost] = useState<number>(0);
  //error trapping

  const [error, setError] = useState("");
  const [zeroCount, setZeroCount] = useState<number>(0);
  const [oneCount, setOneCount] = useState<number>(0);
  const [twoCount, setTwoCount] = useState<number>(0);
  const [threeCount, setThreeCount] = useState<number>(0);
  const [fourCount, setFourCount] = useState<number>(0);
  const [fiveCount, setFiveCount] = useState<number>(0);
  const [sixCount, setSixCount] = useState<number>(0);

  const [zeroCountCost, setZeroCountCost] = useState<number>(0);
  const [oneCountCost, setOneCountCost] = useState<number>(0);
  const [twoCountCost, setTwoCountCost] = useState<number>(0);
  const [threeCountCost, setThreeCountCost] = useState<number>(0);
  const [fourCountCost, setFourCountCost] = useState<number>(0);
  const [fiveCountCost, setFiveCountCost] = useState<number>(0);
  const [sixCountCost, setSixCountCost] = useState<number>(0);
  const [threeCountWin, setThreeCountWin] = useState<number>(0);
  const [fourCountWin, setFourCountWin] = useState<number>(0);
  const [fiveCountWin, setFiveCountWin] = useState<number>(0);
  const [sixCountWin, setSixCountWin] = useState<number>(0);
  const [loserCount, setLoserCount] = useState<number>(0);
  const [loserAmount, setLoserAmount] = useState<number>(0);
  const [winnerCount, setWinnerCount] = useState<number>(0);
  const [winnerAmount, setWinnerAmount] = useState<number>(0);
  const [netWinOrLose, setNetWinOrLose] = useState<number>(0);

  //ticket tally buckets
  let zerotCount = 0;
  let onetCount = 0;
  let twotCount = 0;
  let threetCount = 0;
  let fourtCount = 0;
  let fivetCount = 0;
  let sixtCount = 0;

  const handleSubmit = (e: any) => {
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
    if (ticketInput < "1") {
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
      setError(
        "...go put your kid's college fund back in the bank and limit the number of tickets to under 10,000"
      );
      return;
    }

    setTicketNum(ticketInput); //console.log(ticketNum);
    setTicketCost(+ticketInput * 2); //the + char casts the string to a number

    setError("");

    //winning ticket
    const winningTicket = DrawTicket();
    //console.log(`winning ticket: ${winningTicket}`);
    //console.log(`Winner: ${winningTicket}`);
    setWinningTicket(winningTicket);
    const winningTicketSplit = winningTicket.split(",");

    let newballList = [];

    winningTicketSplit.forEach((item) => {
      newballList.push(
        <p
          key={2 + Math.random() * 100}
          className="flex items-center justify-center w-12 h-12 pr-2 m-2 text-sm font-semibold text-red-600 border-2 border-black rounded-full shadow-lg lg:h-18 lg:w-18"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          &nbsp; {item}
        </p>
      );
    });
    /*  winningTicketSplit.forEach((item) => {
            newballList.push(<p key={2 + Math.random() * 100} className="items-center justify-center inline-block w-12 h-12 pt-2 pr-2 m-2 text-red-600 align-middle bg-yellow-400 border-2 border-black rounded-full text-md md:text-2xl sm:align-middle decoration-4" 
            style={{height:"56px", width:"56px", borderRadius:"50%", alignItems: "center", justifyContent: "center"}}>&nbsp; {item} &nbsp;</p>)
        })*/

    setBallList(newballList);

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

      let yourTicketSplit = yourTicket.split(",");

      for (let i = 0; i < winningTicketSplit.length; i++) {
        if (yourTicketSplit.indexOf(winningTicketSplit[i]) !== -1) {
          numberCounter = numberCounter + 1;
        }
      }

      //console.log(`numberCounter: ${numberCounter}`);

      if (numberCounter === 0) {
        zerotCount = zerotCount + 1;
      } else if (numberCounter === 1) {
        onetCount = onetCount + 1;
      } else if (numberCounter === 2) {
        twotCount = twotCount + 1;
      } else if (numberCounter === 3) {
        threetCount = threetCount + 1;
      } else if (numberCounter === 4) {
        fourtCount = fourtCount + 1;
      } else if (numberCounter === 5) {
        fivetCount = fivetCount + 1;
      } else if (numberCounter === 6) {
        sixtCount = sixtCount + 1;
      }

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

      let zerotCountCost = zerotCount * 2;
      setZeroCountCost(zerotCountCost);

      let onetCountCost = onetCount * 2;
      setOneCountCost(onetCountCost);

      let twotCountCost = twotCount * 2;
      setTwoCountCost(twotCountCost);

      let threetCountCost = threetCount * 2;
      setThreeCountCost(threetCountCost);

      let losersCt = zerotCount + onetCount + twotCount;
      setLoserCount(losersCt);
      let losersTotal = losersCt * 2;
      setLoserAmount(losersTotal);

      let fourtCountCost = fourtCount * 2;
      setFourCountCost(fourtCountCost);

      let fivetCountCost = fivetCount * 2;
      setFiveCountCost(fivetCountCost);

      let sixtCountCost = sixtCount * 2;
      setSixCountCost(sixtCountCost);

      let threetCountWin = threetCount * 2;
      setThreeCountWin(threetCountWin);

      let fourtCountWin = fourtCount * 32;
      setFourCountWin(fourtCountWin);

      let fivetCountWin = fivetCount * 300000;
      setFiveCountWin(fivetCountWin);

      let sixtCountWin = sixtCount * 10000000;
      setSixCountWin(sixtCountWin);

      let winnersCt = threetCount + fourtCount + fivetCount + sixtCount;
      setWinnerCount(winnersCt);
      let winnersTotal =
        threetCountWin + fourtCountWin + fivetCountWin + sixtCountWin;
      setWinnerAmount(winnersTotal);

      let netWinLose = winnersTotal - +ticketInput * 2;
      setNetWinOrLose(netWinLose);

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
        <title>cfsnap.com - web dev goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Lottery Simulator - Play the lottery without spending any of your money."
        />
        <meta name="keywords" content="Lottery, lottery simulator, " />
        <meta name="author" content="cfsnap.com, " />
      </Head>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="col-span-1 sm:col-span-8">
          <div className="p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-4 align-middle">
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                <p className="p-2 pb-0 mb-0 font-semibold text-center text-md md:text-3xl sm:align-middle">
                  Lottery Simulator
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg">
            <div className="container">
              <div className="showcase-form card">
                <h2 className="p-2 pb-4 mb-0 font-semibold text-center text-black-900 text-md md:text-2xl sm:align-middle">
                  How Much Money Would I Win If I Bought.... <br />
                  100 Lottery Tickets?
                  <br />
                  5000 Lottery Tickets?
                  <br />
                  10,000 Lottery Tickets?
                  <br />
                  For One Drawing?
                </h2>
                <h3 className="p-2 pb-4 mb-0 font-semibold text-center text-black-900 text-md md:text-xl sm:align-middle">
                  "I'll hit that jackpot for sure if I buy a few thousand
                  tickets for the next drawing!"
                  <br /> Don't be so sure....
                </h3>
                <strong>How It Works</strong>
                <br />
                Play the lottery (sort of) without spending any of your own
                money. This app simulates buying lottery tickets, immediately
                drawing the winning numbers and then shows you how many of your
                tickets were winners (or not). This simulator is based on a
                standard 6 number state lottery game (<strong>NOT</strong>{" "}
                Powerball or other games where you need an additional winning
                ball to win the jackpot).
                <br />
                <br />
                This simulator uses Quick Picks to generate your tickets,
                meaning the lottery machine simply picks the numbers for your
                tickets randomly.
                <br />
                <br />
                Most state lotteries draw 6 numbers between 1 and 48 and you’ll
                need to match all 6 numbers to win the jackpot (although most
                states will award you with modest cash prizes for matching 5, 4
                or even 3 out of the 6 numbers).
                <br />
                <br />
                It couldn’t be easier, use the form to enter the number of
                tickets you want to "buy", then click the Draw! button to see
                what you won (or lost). We'll present you with a Winning ticket
                box (green outline) and a losing ticket box (red outline) below.
                We'll even do all the math and add up/break down you winnings
                (losses). Good luck!
              </div>
              <br />
              <div className="content-center text-center">
                {!ticketNum.length ? (
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
                      <input
                        type="submit"
                        value="Draw!"
                        className="inline-block px-6 py-1 text-lg font-medium text-white transition duration-500 bg-blue-600 rounded-full cursor-pointer ease hover:bg-indigo-900"
                      />
                    </div>
                    {error.length > 0 ? (
                      <h6 style={{ color: "red" }}>
                        {" "}
                        <br />
                        {error}{" "}
                      </h6>
                    ) : (
                      ""
                    )}
                  </form>
                ) : (
                  <button
                    defaultValue="Play Again!"
                    className="content-center inline-block px-4 py-1 text-lg font-medium text-center text-white bg-blue-600 border-0 rounded-full cursor-pointer w-25"
                    onClick={() => router.refresh()}
                  >
                    Play Again!
                  </button>
                )}
              </div>
              {winningTicket.length ? (
                <div className="py-3">
                  Congratulations! You "bought" {ticketNum} tickets. Each ticket
                  usually costs $2. <br />
                  <br />{" "}
                  <span className="font-bold text-green-600">
                    Had you actually purchased those tickets you would have
                    spent ${ticketCost}.{" "}
                  </span>
                  <br />
                  <br /> Right after you bought your tickets we drew the winning
                  numbers (chosen randomly just like they do on TV): <br />
                  <br />
                  <p className="p-2 pb-0 mb-0 font-semibold text-center text-red-600 text-md md:text-2xl sm:align-middle">
                    Tonight's Winning Lottery Numbers
                  </p>
                  {/* {winningTicket.replace(/,/g, '   |   ')}<br /> */}
                  <div className="flex items-center justify-center">
                    {ballList}
                  </div>
                  <h6 className="p-1 pb-0 mt-4 mb-0 sm:align-middle">
                    Let's check your tickets against the winning numbers:
                    <br />
                    <br /> Of the {ticketNum} tickets you "bought"....{" "}
                  </h6>
                </div>
              ) : (
                " "
              )}

              {ticketNum.length ? (
                <>
                  <div className="p-2 py-3 mb-4 text-center border-2 border-red-600 border-solid rounded-md">
                    <strong>YOUR LOSING TICKETS</strong>
                    <br /> Sorry, but these tickets aren't worth the paper
                    they're printed on.
                    <br />
                    <br />
                    {zeroCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          0 out of 6 numbers: {zeroCount} tickets{" "}
                        </strong>
                        <br />
                        {zeroCount} of your tickets didn't match any numbers. At
                        $2 per ticket, you can say goodbye to ${zeroCountCost}{" "}
                        of your ${ticketCost}. Just take a match, light it up
                        and burn ${zeroCountCost}.
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          0 out of 6 numbers: {zeroCount} tickets{" "}
                        </strong>
                      </p>
                    )}
                    {oneCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>1 out of 6 numbers: {oneCount} tickets</strong>
                        <br />
                        {oneCount} of your tickets matched{" "}
                        <strong>1 out of 6</strong> winning numbers. Lessee...
                        what do you win if you get 1 out of 6 numbers on a
                        ticket... oh yeah <strong>nothing!</strong> 1 out of 6
                        numbers pays nothing. At $2 per ticket, you pissed away
                        an additional ${oneCountCost} of your ${ticketCost}.{" "}
                        <br />
                        Don't worry it gets better. <br />
                        No, it doesn't....
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>1 out of 6 numbers: {oneCount} tickets </strong>{" "}
                        Which is a good thing because these tickets would be
                        worthless anyway.
                      </p>
                    )}
                    {twoCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>2 out of 6 numbers: {twoCount} tickets</strong>
                        <br />
                        {twoCount} of your tickets matched{" "}
                        <strong>2 out of 6</strong> winning numbers. Awesome!
                        But you still haven't won anything. 2 out of 6 numbers
                        pays nothing. This lottery thing isn't exactly paying
                        off is it? You may have thought you won something, but
                        in actuality you just lost ${twoCountCost} more of your
                        initial ${ticketCost}. A red-assed baboon banging on a
                        drum would do better than this.{" "}
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>2 out of 6 numbers: {twoCount} tickets </strong>
                      </p>
                    )}
                    <p className="pb-2 text-left">
                      <strong>Summary:</strong> You just bought ${ticketCost} of
                      lottery tickets. {loserCount} ticket(s) are totally
                      worthless, and those losing tickets cost you{" "}
                      <span className="text-red-600">
                        <strong>${loserAmount} </strong>
                      </span>{" "}
                      out of your{" "}
                      <span className="text-red-600">
                        <strong>${ticketCost}</strong>
                      </span>
                      . Not a great investment, but hey, you have your health,
                      right?{" "}
                    </p>
                  </div>

                  <div className="p-2 py-3 mb-4 text-center border-2 border-green-600 border-solid">
                    <strong>YOUR WINNING TICKETS</strong>
                    <br /> Now we're talking! Gonna tell my boss a thing or
                    two.... <br />
                    <br />
                    {threeCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          3 out of 6 numbers: {threeCount} tickets{" "}
                        </strong>
                        <br />
                        {threeCount} of your tickets matched{" "}
                        <strong>3 out of 6</strong> winning numbers. YES! Now
                        I'm famous - I'll do shaving ads and beer commercials
                        and - wait a minute - a ticket matching 3 out of 6
                        numbers only pays $2. Lessee, {threeCount} winning
                        tickets at $2 each, that's ${threeCountWin} burning a
                        hole in your pocket!
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          3 out of 6 numbers: {threeCount} tickets{" "}
                        </strong>
                        <br />
                        None of your tickets had 3 out of 6 numbers. Too bad,
                        you could've won some money. Not much money, but a
                        little....
                      </p>
                    )}
                    {fourCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          4 out of 6 numbers: {fourCount} tickets{" "}
                        </strong>
                        <br />
                        {fourCount} of your tickets matched{" "}
                        <strong>4 out of 6</strong> winning numbers. OK, this is
                        more like it. Tickets with 4 out of 6 numbers will win
                        you $32 each. Lessee, {fourCount} winning tickets at $32
                        each, that's ${fourCountWin} . Wow, that's less than I
                        was hoping for....
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          4 out of 6 numbers: {fourCount} tickets{" "}
                        </strong>
                        <br />
                        None of your tickets had 4 out of 6 numbers. You
                        could've won some money. You also could have finished
                        school, married your high school sweetheart and not
                        swallowed that poor moth during your walk last night.
                        But it's OK, you do you....
                      </p>
                    )}
                    {fiveCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          5 out of 6 numbers: {fiveCount} tickets{" "}
                        </strong>
                        <br />
                        {fiveCount} of your tickets matched{" "}
                        <strong>5 out of 6</strong> winning numbers. You are
                        quite the unicorn! In certain state lotteries such as
                        the New York Lottery a ticket matching 5 out of 6
                        numbers can pay $300,000! {fiveCount} winning ticket(s)
                        at $300,000 each, that's a cool ${fiveCountWin}. Now,
                        while you have all of that luck oozing out of your pores
                        you should go and file your taxes, because the tax man
                        will want his cut once he hears about your lucky ticket!{" "}
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>
                          5 out of 6 numbers: {fiveCount} tickets{" "}
                        </strong>
                        <br />
                        None of your tickets had 5 out of 6 numbers. You better
                        go take the <strong>I QUIT</strong> sign off of your
                        desk.{" "}
                      </p>
                    )}
                    {sixCount > 0 ? (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>6 out of 6 numbers: {sixCount} tickets </strong>
                        <br />
                        {sixCount} of your tickets matched{" "}
                        <strong>6 out of 6</strong> winning numbers. YOU JUST
                        WON A BAZILLION DOLLARS! (Don't worry that we're not
                        quoting an exact winning dollar amount - like it's
                        really gonna matter?) But that's great news! When we
                        heard of this once-in-a-lifetime epoch of yours we all
                        laughed and cried (mostly cried). If you ever really win
                        the jackpot don't tell anyone, because your supposed
                        "friends" will immediately kidnap your cat and demand
                        your new found jackpot as ransom. People can be
                        a**holes. But good for you!
                      </p>
                    ) : (
                      <p className="pb-2 text-left">
                        &#9679;{" "}
                        <strong>6 out of 6 numbers: {sixCount} tickets </strong>
                        <br />
                        None of your tickets had 6 out of 6 numbers. And to
                        think you had all that hope in your heart....{" "}
                      </p>
                    )}
                    <p className="pb-2 text-left">
                      <strong>Summary:</strong> You have ${ticketCost} of
                      lottery tickets. {winnerCount} of your ticket(s) are
                      winners, and those tickets won you{" "}
                      <span className="text-green-600">
                        <strong>${winnerAmount}. </strong>
                      </span>
                      <br />
                      <br />
                      You spent:{" "}
                      <span className="text-red-600">
                        <strong>${ticketCost}</strong>
                      </span>
                      <br />
                      You won:{" "}
                      <span className="text-green-600">
                        <strong>${winnerAmount} </strong>
                      </span>
                      <br />
                      You won/lost:&nbsp;
                      <span
                        className={
                          netWinOrLose > 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        <strong>${netWinOrLose}</strong>
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                " "
              )}

              {ticketNum.length ? (
                <div>
                  <br /> Your tickets <br />
                </div>
              ) : (
                ""
              )}
              {ticketList.length ? (
                <div>
                  <pre>{ticketList}</pre>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-4">
          <div className="relative sm:sticky top-8">
            <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
              <h3 className="pb-4 mb-2 text-xl font-semibold border-b">
                Blog Categories
              </h3>
              <Categories />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LotterySimulator;
