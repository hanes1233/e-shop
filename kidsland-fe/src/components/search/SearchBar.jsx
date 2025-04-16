import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import '../../css/search/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="search-bar">
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    onClick={(e) => handleSubmit(e)}
                                    style={{ cursor: "pointer" }} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="What are you looking for?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default SearchBar;