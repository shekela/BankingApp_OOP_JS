name = document.getElementById('Name')
surname = document.getElementById('Surame')
id = document.getElementById('Id')
btn = document.getElementById('btn')

balance = document.getElementById('Balance')
owner = document.getElementById('Owner')
idnum = document.getElementById('IdNum')



class BankAcc{
    constructor(name, surname, id, balance){
       this.name = name
       this.surname =surname
       this.id = id
       this.balance = 0

    }
    deposit(Money){
        this.balance += Money
        balance.innerHTML = `Balance in GEL: ${this.balance}₾`
    }
    withdraw(Money){
        this.balance -= Money
        balance.innerHTML = `Balance in GEL: ${this.balance}₾`
    }
}





function registerAcc(){

	name = document.getElementById('Name').value
    surname = document.getElementById('Surname').value
    id = document.getElementById('Id').value

    Person = new BankAcc(name,surname,id,0)

    
    owner.innerHTML = `Owner: ${name} ${surname}`
    idnum.innerHTML = `ID: ${id}`
    console.log(Person)
    
}

const btnDepo = () =>{

    MoneyInp = document.getElementById('MoneyInp').value
    MoneyInp = parseInt(MoneyInp)
    
    Person.deposit(MoneyInp)
    console.log(Person)
}

const btnWith = () =>{

    MoneyInp = document.getElementById('MoneyInp').value
    MoneyInp = parseInt(MoneyInp)
    
    Person.withdraw(MoneyInp)
    console.log(Person)
}

const makedeposit = () => {
    append = document.getElementById('append')
     append.innerHTML = `
    <div style="    
    width: 500px;
    height: 250px;
    border: 1px solid black;
    border-radius: 7.5px;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 5%;
    margin-left:-20%;
    text-align: center;
    background-color: #4A9AFF;">
    
    <h1>Enter Money you want to deposit</h1>
        <input id="MoneyInp"
    style="width: 350px;
    height: 35px;
    font-size: 25px;
    border-radius: 3.5px;
">
<a href="#" id="btn" onclick="btnDepo();"><div class="Submit" style="
    width: 200px;
    height: 43.5px;
    background: rgb(0,52,255);
    background: linear-gradient(45deg, rgba(0,52,255,1) 0%, rgba(55,64,214,1) 23%, rgba(2,122,246,1) 53%, rgba(68,57,193,1) 76%);
    font-size: 28px;
    font-weight: 800;
    font-family: sans-serif;
    left: 50%;
    top: 55%;
    transform: translate(75%, 85%);
    color: whitesmoke;
    border-radius: 4px;">Deposit</div></a> 
    </div>
        
    `
   }

const makeWithdraw = () =>{
    
    append = document.getElementById('append')
     append.innerHTML = `
    <div style="    
    width: 500px;
    height: 250px;
    border: 1px solid black;
    border-radius: 7.5px;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 5%;
    margin-left:-20%;
    text-align: center;
    background-color: #4A9AFF;">
    
    <h1>Enter Money you want to withdraw</h1>
        <input id="MoneyInp"
    style="width: 350px;
    height: 35px;
    font-size: 25px;
    border-radius: 3.5px;
">
<a href="#" id="btn" onclick="btnWith();"><div class="Submit" style="
    width: 200px;
    height: 43.5px;
    background: rgb(0,52,255);
    background: linear-gradient(45deg, rgba(0,52,255,1) 0%, rgba(55,64,214,1) 23%, rgba(2,122,246,1) 53%, rgba(68,57,193,1) 76%);
    font-size: 28px;
    font-weight: 800;
    font-family: sans-serif;
    left: 50%;
    top: 55%;
    transform: translate(75%, 85%);
    color: whitesmoke;
    border-radius: 4px;">Withdraw</div></a> 
    </div>
        
    `
}

