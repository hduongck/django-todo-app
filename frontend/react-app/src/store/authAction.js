import axios from 'axios'
import * as actionTypes from './authActionTypes';
import * as settings from '../settings'

const SESSION_DURATION = settings.SESSION_DURATION
// ##############################################
// ##############################################
// Contains Auth Action Functions. These perform two kinds of things:
// 1) Return Action Objects
// a) Simple return an action objects
// b) Perform some action and then return an Action object
// 2) Return a Disbatch(action) combination
// a) Perform an action then return a Dispatch(action combination)
// This Dispatch(Action) could be used by some other function to dispatch action to the store