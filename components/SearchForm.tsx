import React from 'react'
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

//const SearchForm = ({query} : { query?: string}) => {
const SearchForm = (props : { query?: string}) => {
    const query = props.query || "";
    return (
        <div>
            <Form action="/" className="search-form" scroll={false}>
                {/* On submission, the input value will be appended to 
                the URL, e.g. /search?query=abc */}
                <input 
                    name="query"
                    defaultValue={query}
                    className="search-input"
                    placeholder="Search Startups" 
                />

                <div className="flex gap-2">
                    {query && (
                        <SearchFormReset />
                    )}
                    
                    <button type="submit" className="search-btn text-white">
                        <Search className="size-5" />
                    </button>
                </div>

            </Form>
        </div>
    )
}

export default SearchForm