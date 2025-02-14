import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .slick-slider {
    position: relative;
  }

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  .slick-dots {
    display: flex;
    position: absolute;
    bottom: 3vh;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .slick-dots li {
    list-style: none;
  }

  .slick-dots li button {
    background-color: transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
    position: relative;
  }

  .slick-dots li button:before {
    font-size: 0;
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #a9a9a9;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .slick-dots li.slick-active button:before {
    background-color: #2864cc;
  }

  .slick-dots li button:hover:before {
    background-color: #555;
  }
`;
