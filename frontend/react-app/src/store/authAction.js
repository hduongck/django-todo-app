import axios from 'axios'
import * as actionTypes from './authActionTypes';
import * as settings from '../settings'

const SESSION_DURATION = settings.SESSION_DURATION
// ##############################################
// ##############################################
// Contains Auth Action Functions. These perform two kinds of things:
// 1) Return Action Objects