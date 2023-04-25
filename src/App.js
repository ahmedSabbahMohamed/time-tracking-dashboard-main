import data from './data.json';
import jeremy from "./images/image-jeremy.png";
import Card from "./Card";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import social from "./images/icon-social.svg";
import care from "./images/icon-self-care.svg";

function App() {
  function change (e) {
    let control = document.querySelectorAll(".control");
        control.forEach(ele => {
          ele.classList.remove("text-white");
          ele.classList.add("text-paleblue");
      e.currentTarget.classList.add("text-white");
      let daily = document.querySelectorAll(".daily");
      let weekly = document.querySelectorAll(".weekly");
      let monthly = document.querySelectorAll(".monthly");
      if (e.currentTarget.dataset.custom === ".daily") {
        daily.forEach(ele => {
          ele.classList.remove("hidden");
          weekly.forEach(ele => {
            ele.classList.add("hidden");
          });
          monthly.forEach(ele => {
            ele.classList.add("hidden");
          })
        })
      } else if (e.currentTarget.dataset.custom === ".weekly") {
        weekly.forEach(ele => {
          ele.classList.remove("hidden");
          daily.forEach(ele => {
            ele.classList.add("hidden");
          });
          monthly.forEach(ele => {
            ele.classList.add("hidden");
          })
        })
      } else if (e.currentTarget.dataset.custom === ".monthly") {
        monthly.forEach(ele => {
          ele.classList.remove("hidden");
          weekly.forEach(ele => {
            ele.classList.add("hidden");
          });
          daily.forEach(ele => {
            ele.classList.add("hidden");
          })
        })
      }
    });
  }
  return (
    <>
    <main className="grid gap-4 grid-cols-1 m-4 md:grid-cols-4">
      <div className="rounded-2xl bg-dblue md:row-span-2">
        <div className="p-4 bg-Blue rounded-2xl flex items-center gap-4 md:flex-col md:items-start md:p-8 md:h-2/3">
          <img className="rounded-full border-2 border-white w-20 h-20" src={jeremy} alt="jeremy" />
          <div className="">
            <p className="text-paleblue">Report for</p>
            <h1 className="text-white text-2xl md:text-4xl md:font-light md:mt-2">Jeremy Robson</h1>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center md:flex-col md:items-start">
          <p className="control text-white cursor-pointer p-2" data-custom = ".daily" onClick={change}>Daily</p>
          <p className="control text-paleblue cursor-pointer p-2" data-custom = ".weekly" onClick={change}>Weekly</p>
          <p className="control text-paleblue cursor-pointer p-2" data-custom = ".monthly" onClick={change}>Monthly</p>
        </div>
      </div>
      <Card
        class="relative rounded-2xl bg-lred pt-10 overflow-hidden z-10"
        classImg="absolute -top-2 right-4 -z-10"
        src={work}
        title={data[0].title}
        current={data[0].timeframes.daily.current}
        previous={data[0].timeframes.daily.previous}
        title2={data[0].title}
        current2={data[0].timeframes.weekly.current}
        previous2={data[0].timeframes.weekly.previous}
        title3={data[0].title}
        current3={data[0].timeframes.monthly.current}
        previous3={data[0].timeframes.monthly.previous}
      />
      <Card
        class="relative rounded-2xl bg-sblue pt-10 overflow-hidden z-10"
        classImg="absolute -top-2 right-4 -z-10"
        src={play}
        title={data[1].title}
        current={data[1].timeframes.daily.current}
        previous={data[1].timeframes.daily.previous}
        title2={data[1].title}
        current2={data[1].timeframes.weekly.current}
        previous2={data[1].timeframes.weekly.previous}
        title3={data[1].title}
        current3={data[1].timeframes.monthly.current}
        previous3={data[1].timeframes.monthly.previous}
      />
      <Card
        class="relative rounded-2xl bg-sred pt-10 overflow-hidden z-10"
        classImg="absolute -top-2 right-4 -z-10"
        src={study}
        title={data[2].title}
        current={data[2].timeframes.daily.current}
        previous={data[2].timeframes.daily.previous}
        title2={data[2].title}
        current2={data[2].timeframes.weekly.current}
        previous2={data[2].timeframes.weekly.previous}
        title3={data[2].title}
        current3={data[2].timeframes.monthly.current}
        previous3={data[2].timeframes.monthly.previous}
      />
      <Card
        class="relative rounded-2xl bg-limegreen pt-10 overflow-hidden z-10"
        classImg="absolute -top-2 right-4 -z-10"
        src={exercise}
        title={data[3].title}
        current={data[3].timeframes.daily.current}
        previous={data[3].timeframes.daily.previous}
        title2={data[3].title}
        current2={data[3].timeframes.weekly.current}
        previous2={data[3].timeframes.weekly.previous}
        title3={data[3].title}
        current3={data[3].timeframes.monthly.current}
        previous3={data[3].timeframes.monthly.previous}
      />
      <Card
        class="relative rounded-2xl bg-violet pt-10 overflow-hidden z-10"
        classImg="absolute -top-2 right-4 -z-10"
        src={social}
        title={data[4].title}
        current={data[4].timeframes.daily.current}
        previous={data[4].timeframes.daily.previous}
        title2={data[4].title}
        current2={data[4].timeframes.weekly.current}
        previous2={data[4].timeframes.weekly.previous}
        title3={data[4].title}
        current3={data[4].timeframes.monthly.current}
        previous3={data[4].timeframes.monthly.previous}
      />
      <Card
        class="relative rounded-2xl bg-sorange pt-10 overflow-hidden z-10"
        classImg="absolute -top-2 right-4 -z-10"
        src={care}
        title={data[5].title}
        current={data[5].timeframes.daily.current}
        previous={data[5].timeframes.daily.previous}
        title2={data[5].title}
        current2={data[5].timeframes.weekly.current}
        previous2={data[5].timeframes.weekly.previous}
        title3={data[5].title}
        current3={data[5].timeframes.monthly.current}
        previous3={data[5].timeframes.monthly.previous}
      />
    </main>
    </>
  );
}

export default App;
