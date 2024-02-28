import './../styles/main.css';
import Transaction from '../composantes/transaction';
function User() {
    function redirect(){
        window.localStorage.clear();
        window.location = '/sign-in';
    }
    let data = {
        name:'Tony Jarvis',
        transaction: [
            {
                title: "Argent Bank Checking (x8349)",
                amount: 2082.79,
                description: "Available Balance"
            },
            {
                title: "Argent Bank Savings (x6712)",
                amount: 10928.42,
                description: "Available Balance"
            },
            {
                title: "Argent Bank Credit Card (x8349)",
                amount: 184.30,
                description: "Current Balance"
            },
        ]
    }
    let i=0;
    let token = localStorage.getItem("token");
    console.log(token);
    return (
    token === null ?
    <main className="main bg-dark">
        <div className="header">
            <h1>Erreur lors de la connexion</h1>
            {redirect()}
        </div>
    </main>
    :
    <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{data.name}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {
            data.transaction.map((element)=>{
                i++;
               return <Transaction data={element} key={"transaction-"+i} />
               
            })
        }
    </main>
    );
  }
  
  export default User;
  