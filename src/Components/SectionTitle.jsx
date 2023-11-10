import React from 'react';
import '../App.css';

const SectionTitle = ({ heading })=> {
    return (
        <div className="md:w-4/12 text-center mx-auto mb-2">
        
        <h3 className=" text-3xl 	mt-2">{heading}</h3>
      </div>
    );
};

export default SectionTitle;