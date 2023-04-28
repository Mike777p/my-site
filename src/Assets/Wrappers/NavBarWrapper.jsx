import styled from 'styled-components'

const Wrapper = styled.main`
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
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
  padding: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
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