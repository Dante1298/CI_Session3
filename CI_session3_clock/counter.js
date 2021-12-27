import {renderTextBySeconds} from "./helper.js";
class Counter {
    $container;
    $label;
    $btnStart;
    $btnStop;
    $intervalHanler;
    $counter;
    constructor (id, classStart, classStop) {
        this.$counter = 0;
        this.$container = document.createElement("div");
        this.$container.id = id;
        this.$container.classList.add("d-flex", "container", "mt-5");

        this.$label = document.createElement("div");
        this.$label.innerText = "00 : 00";
        this.$label.classList.add("label")

        this.$btnStart = document.createElement("button");
        this.$btnStart.innerText = "Start";
        this.$btnStart.classList.add("btn", classStart, "btnStart");
        this.$btnStart.addEventListener("click", this.handleStart);

        this.$btnStop = document.createElement("button");
        this.$btnStop.innerText = "Stop";
        this.$btnStop.classList.add("btn", classStop, "btnStop" , "btnPause");
        this.$btnStop.addEventListener("click", this.handleStop);
    }

         handleStart = () => {
             console.log("Start");
             this.$intervalHanler = setInterval(() => {
             this.$counter++;
             this.$label.innerText = renderTextBySeconds(this.$counter);
              }, 1000 );
         }
         handleStop = () => {
             console.log("Stop");
             clearInterval(this.$intervalHanler);
             this.$timeOut = setTimeout(() => {
             this.$counter = 0;
             this.$label.innerHTML = "00 : 00";

            }, 500);
         }
    
    render () {
        this.$container.append(this.$label, this.$btnStart, this.$btnStop);
        return this.$container;
        
    }
}

    class StartAll extends Counter {
        $btnStartAll;
        constructor(id) {
        super (id) ;
        this.$btnStartAll = document.createElement("button");
        this.$btnStartAll.classList.add ("btn", "btn-outline-success");
        this.$btnStartAll.innerText = "StartAll";
        this.$btnStartAll.addEventListener("click", this.handleStartAll);
    }
    handleStartAll = () => {
        let a = document.querySelectorAll(".btnStart");
        for( let i = 0; i < a.length ; i++) {
            a[i].click();
        }
    }
    render () {
        this.$container.append(this.$btnStartAll)
        return this.$container;
       }
    }

    class StopAll extends Counter {
        $btnStopAll;
        constructor(id) {
        super (id) ;
        this.$btnStopAll = document.createElement("button");
        this.$btnStopAll.classList.add ("btn", "btn-outline-danger");
        this.$btnStopAll.innerText = "StopAll";
        this.$btnStopAll.addEventListener("click", this.handleStopAll);
    }
    handleStopAll = () => {
        let b = document.querySelectorAll(".btnStop")
        for( let i = 0; i < b.length; i++) {
            b[i].click()
        }
    }
    render() {
        this.$container.append(this.$btnStopAll)
        return this.$container
       }
    }

    class Pause extends Counter {
        $btnPause;
        constructor(id) {
        super (id) ;
        this.$btnPause = document.createElement("button");
        this.$btnPause.classList.add ("btn", "btn-outline-warning");
        this.$btnPause.innerText = "Pause";
        this.$btnPause.addEventListener("click", this.handlePause);
       
    }
    handlePause = () => {
        let c = document.querySelectorAll(".btnPause")
        for( let i = 0; i < c.length; i++) {
            c[i].click()
            console.log("Pause");
            clearInterval(this.$intervalHanler);
        }
        
    }
    render() {
        this.$container.append(this.$btnPause);
        return this.$container
       }
    }

export default {Counter, StartAll, StopAll, Pause};


