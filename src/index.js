import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';





// ========================================



class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <h2>{this.props.value}</h2>

        )
    }
}

class SubHeading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <p>{this.props.value}</p>
        )
    }
}

class BasicInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (<label>
            {this.props.value}
            <br></br>
            <input type="text" name="name" />
            <br></br>

        </label>)
    }
}

class SelectIP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            list: []
        };
    }

    render() {
        return (
            <label>
                {this.props.value}
                <br></br>
                <select id="State" onChange={this.myChangeHandler}>
                    <option disabled selected value></option>
                    <option id="Vic">Vic</option>
                    <option id="NSW">NSW</option>
                    <option id="QSD">QSD</option>
                    <option id="ACT">ACT</option>
                </select>          <br></br>

            </label>
        )
    }
    State = ''
    myChangeHandler(event) {
        // console.log(event.target.id)
        // let x = event.target.id
        // this.x = event.target.value
    }
}

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            list: []
        };
    }
    render() {
        return (
            <Button variant="outlined" color="primary" onClick={() => this.clickhandler2()}>{this.props.value}
            </Button>
        )
    }

    clickhandler(event) {
        // fetch('http://echo.jsontest.com/key/value/one/two')
        fetch('https://192.168.0.26:44338/v1/personaldetails')

            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
        //send your json here
    }
    clickhandler2(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        // fetch('http://echo.jsontest.com/key/value/one/two')
        fetch('https://192.168.0.26:44338/v1/personaldetails', requestOptions)

            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
        //send your json here
    }

}





// class EachOptionInSelect {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//             list : []
//         };
//     }

//     render () {
//         return (

//         )
//     }
// }
















class Bigbox extends React.Component {

    renderHeading(x) {
        return (<Heading value={x} />
        )
    }

    rendersubHeading(x) {
        return (<SubHeading value={x} />
        )
    }

    renderbasicinput(x) {
        return (
            <BasicInput value={x} />
        )

    }

    statelist = ['State1', 'State2', 'State3']
    countrylist = ['c1', 'c2', 'c3']

    renderselectorip(x, statelist) {
        return (
            <SelectIP value={x} list={statelist} />
        )
    }

    renderButtons(x) {
        return (
            <Buttons value={x} />
        )
    }
    render() {
        return (
            <div>{this.renderHeading('Step 3 of 4')}
                {/* </div>
            <div> */}
                {this.rendersubHeading('Address Details')}
                {this.renderbasicinput('Street Address(Line 1)')}
                {this.renderbasicinput('Street Address(Line 2)')}
                {this.renderbasicinput('Suburb')}
                {this.renderselectorip('State', this.statelist)}
                {this.renderbasicinput('Postcode')}
                {this.renderselectorip('Country', this.countrylist)}
                {this.renderButtons('Back')}
                {this.renderButtons('Continue')}

            </div>
            // <h1>helo</h1>
        )
    }
}

class Parentbox extends React.Component {
    render() {
        return (
            <div>
                <Bigbox></Bigbox>
            </div>
        )
    }
}








ReactDOM.render(
    // <Game />,
    <Parentbox />,
    document.getElementById('root')
);
