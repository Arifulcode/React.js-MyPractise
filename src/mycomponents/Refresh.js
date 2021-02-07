import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Refresh extends Component {
  constructor() {
    super();
    this.RefreshNow = this.RefreshNow.bind(this);
  }

  RefreshNow() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.RefreshNow} className="btn btn-success my-5">
          Refresh Button
        </button>
        <h1>{Math.random()}</h1>
        <div className='container' justify>
            <p>
            lorem ipsum dolor sit amet, consectet Amet ipsum exercitation deserunt
            exercitation. Ullamco ullamco elit fugiat ex labore elit. Do aute
            aliqua tempor qui cillum id anim ex sunt ipsum cupidatat. Exercitation
            adipisicing anim sit commodo occaecat et aliqua sint. Eu consequat do
            incididunt magna culpa officia Lorem officia incididunt exercitation
            nostrud cillum proident.
            </p>
            lorem ipsumId in commodo proident laborum aliquip nulla sunt non. Ex
          et veniam eu consectetur. Voluptate ut velit do in. Ipsum ea tempor
          exercitation consequat nulla Lorem minim. Eu deserunt occaecat nostrud
          mollit proident non anim velit. Exercitation ex magna aute velit
          consequat ipsum sunt ut ullamco. Sit dolore do in voluptate sint
          laborum est. Ad fugiat aute aliqua mollit ullamco id adipisicing
          nulla. Excepteur adipisicing ut enim veniam ullamco ex aliqua magna
          nostrud ut ex enim cupidatat. Reprehenderit qui incididunt proident
          sit nisi. Deserunt reprehenderit incididunt deserunt qui consequat non
          minim sunt ex aute. Quis proident tempor est velit pariatur occaecat
          mollit. Incididunt exercitation minim cupidatat aute veniam enim. Aute
          eiusmod culpa in nulla consequat amet reprehenderit nostrud eiusmod
          tempor Lorem labore dolor. Duis pariatur deserunt minim commodo
          occaecat exercitation occaecat sint amet. Elit ut occaecat culpa minim
          reprehenderit culpa quis dolor esse. Deserunt ea sunt enim
          reprehenderit elit qui Lorem officia aliqua sint consequat deserunt.
          Exercitation et sit enim sit. Adipisicing aliquip adipisicing nulla ut
          adipisicing. Voluptate culpa dolor minim in excepteur veniam elit et.
          Consectetur eu proident mollit do aute est excepteur consectetur. Est
          do laboris culpa ullamco elit velit elit id ipsum sint exercitation
          nisi. Non exercitation amet reprehenderit laboris elit officia.
          Adipisicing Lorem amet excepteur amet adipisicing in sunt. Non eiusmod
          cillum ipsum ut id pariatur duis voluptate. Qui veniam quis voluptate
          voluptate irure ex exercitation ullamco minim qui ad anim non
          proident.
        
            
        </div>
        
      </div>
    );
  }
}

export default Refresh;
