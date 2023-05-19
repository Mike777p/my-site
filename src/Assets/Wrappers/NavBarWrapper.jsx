import styled from 'styled-components'

const Wrapper = styled.main`
.navbar {
  position: fixed; // Change from 'sticky' to 'fixed'
  top: 0; // Keep this line
  left: 0; // Add this line
  right: 0; // Add this line
  z-index: 1000; // Add this line
  background-color: #150734;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
  background-image: url(https://i.makeagif.com/media/2-27-2015/jv6xB8.gif)
}

 a {
  color: white;
}
a:visited {
  color: lightgrey;
}

a:hover {
  color: green;
}

.nav-links {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  display: block;
  padding: 0 30px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
}

.nav-links a:hover { 
  color: green;
}


.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  padding: 5px 0;
  margin: 0;
  z-index: 100;
}

.dropdown li {
  padding: 5px 10px;
}

.dropdown a {
  display: block;
  padding: 3px 10px;
  text-decoration: none;
  color: #333;
  font-weight: 400;
}

.nav-links li:hover > .dropdown {
  display: block;
}

.dropdown li:hover {
  background-color: #f8f9fa;
}

`
export default Wrapper