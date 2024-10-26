import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import './login.css';

const PWD_regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
const Email_regex = /\S+@\S+\.\S+/;

const Rigister = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(Email_regex.test(email));
  }, [email]);
  useEffect(() => {
    setValidPwd(PWD_regex.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="RegisterForm">
      <h1 className="icon">
        <FontAwesomeIcon icon={faCloud} />
        Register
      </h1>
      <p
        ref={errRef}
        className={errMsg ? 'errMsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          Username:
          <FontAwesomeIcon
            icon={faCheck}
            className={validEmail ? 'valid' : 'hide'}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validEmail || !email ? 'hide' : 'invalid'}
          />
        </label>
        <input
          id="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          aria-invalid={validEmail ? 'false' : 'true'}
          aria-describedby="uidnote"
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          type="email"
          autoComplete="off"
          ref={emailRef}
          placeholder="Email"
        />
        <p
          id="uidnote"
          className={
            userFocus && email && !validEmail ? 'instructions' : 'offscreen'
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="password">
          Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validPwd ? 'valid' : 'hide'}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validPwd || !pwd ? 'hide' : 'invalid'}
          />
        </label>
        <input
          id="password"
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          value={pwd}
          required
          aria-invalid={validPwd ? 'false' : 'true'}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          placeholder="Password"
        />
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{' '}
          <span aria-label="exclamation mark">!</span>{' '}
          <span aria-label="at symbol">@</span>{' '}
          <span aria-label="hashtag">#</span>{' '}
          <span aria-label="dollar sign">$</span>{' '}
          <span aria-label="percent">%</span>
        </p>
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validMatch && matchPwd ? 'valid' : 'hide'}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validMatch || !matchPwd ? 'hide' : 'invalid'}
          />
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
          required
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          placeholder="Confirm Password"
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>

        <button
          disabled={!validEmail || !validPwd || !validMatch ? true : false}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Rigister;