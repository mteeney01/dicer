import { roll, DIE } from 'roller';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Roller extends React.Component<RouteComponentProps<{}>, any> {
    constructor(props: any) {
        super(props);
        this.state = { results: [] };
    }

    onRollClick = (amount: number, dice: string) => {
        let rolled = roll(amount, DIE[dice]);        
        let results = this.state.results;
        let result = {
            dice: dice,
            rolled: rolled
        };

        results.push(result);

        this.setState({results: results});
    };
    
    public render() {
        return <div>
            <h1>Roller</h1>
            <div className='container-fluid'>
                <div className='row'>
                    <p>Dice</p>
                    <div className='col-sm-6 form-horizontal'>  
                        {Object.keys(DIE).map((f :string, i :number) => {
                            return (<RollerRow onRollClick={this.onRollClick} dice={f} key={i} />)})
                        }
                    </div>
                    <div className='col-sm-6 well'>
                        {this.state.results.map((r: any, i: number) => {
                            return (<p key={i}>Rolled {r.dice}: {r.rolled.rolls.join(', ')} = {r.rolled.total}</p>);
                        })}
                    </div>
                </div>
            </div>
        </div>;
    }
}

export class RollerRow extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { amount: 0 };
    }

    handleRollClick = () => {
        this.props.onRollClick(this.state.amount, this.props.dice);
    };

    onAmountChange = (event: any) => {
        let { value } = event.target; 
        console.log(parseInt(value));       
        this.setState({amount: parseInt(value)});
    };

    public render() {
        return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={this.props.dice}>{this.props.dice}</label>
        <div className="col-sm-6">
            <input className="form-control" type="text" name={this.props.dice} onChange={this.onAmountChange} />
        </div>
        <div className="col-sm-4">
            <button onClick={this.handleRollClick} className="btn btn-default">Roll</button>
        </div>
    </div>);
    };
}
