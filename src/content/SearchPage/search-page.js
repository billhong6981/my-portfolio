import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Search,
  Button,
  Select,
  SelectItem,
} from 'carbon-components-react';
import Link1 from 'carbon-components-react/lib/components/UIShell/Link';

const SearchPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter search-page">
      <div className="bx--row search-page__r1">
        <div className="bx--offset-md-2 bx--col-md-4 bx--offset-lg-4 bx--col-lg-8">
          <Form className="form-name">
            <h5 className="selectHeading">Type of User</h5>
            <Select
              id="select-1"
              defaultValue="organization"
              labelText=""
              size="xl">
              <SelectItem
                disabled
                hidden
                value="organization"
                text="Choose Organization or Personal"
              />
              <SelectItem value="organization" text="organization" />
              <SelectItem value="user" text="personal user" />
            </Select>
            <div className="wrapper1">
              <Search
                id="search-1"
                labelText="Search"
                placeHolderText="Org. Name... / Personal User Name..."
              />

              <Button
                type="submit"
                className="buttonName"
                onClick={e => {
                  e.preventDefault();
                  localStorage.clear();
                  window.location.reload();
                  var node1 = document.getElementById('select-1');
                  var node2 = document.getElementById('search-1');
                  localStorage.setItem('userType', node1.value);
                  localStorage.setItem('userName', node2.value);
                }}>
                <Link1 element={Link} to="/repos">
                  Submit
                </Link1>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
