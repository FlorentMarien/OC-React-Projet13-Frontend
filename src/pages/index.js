import './../styles/main.css';
import iconchat from './../img/icon-chat.png';
import iconmoney from './../img/icon-money.png';
import iconsecurity from './../img/icon-security.png';
import Block_info from '../composantes/block_info';
let data = [{icon:iconchat,alticon:'Chat Icon',title:'You are our #1 priority',text:'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'},{icon:iconmoney,alticon: 'Chat Icon',title:'More savings means higher rates',text:'The more you save with us, the higher your interest rate will be!'},{icon:iconsecurity,alticon: 'Chat Icon',title:'Security you can trust',text:'We use top of the line encryption to make sure your data and money is always safe.'}]
function Index() {
    return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Block_info data={data[0]} />
        <Block_info data={data[1]} />
        <Block_info data={data[2]} />
      </section>
    </main>
    );
  }
  
  export default Index;
  