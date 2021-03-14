const { Component } = React;
class Header extends Component {
   render() {
      const [inputDate, outputDate] = this.props.dates;
      const oneDay = 68400000;
      const today = new Date();
      const tomorrowValue = new Date().valueOf() + oneDay;
      const tomorrow = new Date(tomorrowValue);
      const inpStr = new Date(inputDate + oneDay).toDateString();
      const outStr = new Date(outputDate + oneDay).toDateString();

      return (
         <header className='header'>
            <h1 className='title'>Global Hotels</h1>
            <span>
               Enable from{" "}
               <strong>
                  {inputDate === 0 ? today.toDateString() : inpStr}
               </strong>{" "}
               To{" "}
               <strong>
                  {outputDate === 0 ? tomorrow.toDateString() : outStr}
               </strong>
            </span>
         </header>
      );
   }
}

export default Header;
