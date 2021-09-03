import React, {useState} from "react";
import { useHistory } from "react-router";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history =useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated?<SignedIn signOut ={handleSignOut} />:<SignOut signIn ={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
  );
}
