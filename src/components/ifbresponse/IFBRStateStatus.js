import { states } from './IFBRStates.js';

/*
 * This class simply helps us coordinate the transitions
 * between states. We've hardcoded the state "tree" in 
 * the constructor. This class makes sure that any
 * transition between states requested by the app
 * are valid.
 */
export class StateStatus {
  constructor() {
    this.transitions = {
      [states.INVIATATION_FOR_BID] : [states.SUBMIT_BID],
      [states.SUBMIT_BID] : [states.INVIATATION_FOR_BID, states.CONFIRM],
      [states.CONFIRM] : [states.FINISH] // FYI the FINISH state is not used
    };
  }

  _reverseObject(obj) {
    let reversed = {};
    for(const key in obj) {
      if(obj.hasOwnProperty(key)) {
        obj[key].forEach((i) => {
          if(reversed[i] === undefined) {
            reversed[i] = [key];
          } else {
            reversed[i].push(key);
          }
        });
      }
    }
    return reversed;
  }

  _checkState(available, desired) {
    console.log('_checkState calling --- ' + 'available --' + available + 'desired----' +desired);
    if (available.includes(desired)) {
      return desired;
    } else {
      throw new Error(`Desired state: ${desired} is not available`);
    }
  }

  transitionTo(current, desired) {
    console.log('transitionto method calling');
    let available = this.transitions[current].concat();
    console.log('available value' + available);
    return this._checkState(available, desired);
  }

  transitionFrom(current, desired) {
    let reversed = this._reverseObject(this.transitions);
    let available = reversed[current].concat();
    return this._checkState(available, desired);
  }
}
