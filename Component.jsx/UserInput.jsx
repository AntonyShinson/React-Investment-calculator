export default function UserInput({onChange,userInput})
{
    function removeLeadingZeros(input) {
        const str = input.toString();
        const result = str.replace(/^0+/, "");
        return result;
      };
    let initialInvestment=removeLeadingZeros(userInput.initialInvestment);
    let annualInvestment=removeLeadingZeros(userInput.annualInvestment);
    let expectedReturn=removeLeadingZeros(userInput.expectedReturn);
    let duration=removeLeadingZeros(userInput.duration);
      
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    type="number" 
                    value ={initialInvestment}
                    required onChange={(event)=>{onChange('initialInvestment',event.target.value)}}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                    value ={annualInvestment}
                    onChange={(event)=>{onChange('annualInvestment',event.target.value)}}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required 
                    value ={expectedReturn}
                    onChange={(event)=>{onChange('expectedReturn',event.target.value)}}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                    value ={duration}
                    onChange={(event)=>{onChange('duration',event.target.value)}}/>
                </p>
            </div>
        </section>
    );
}