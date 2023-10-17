import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 25px 20px;
  .logo {
    width: 304px;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }

  .user {
    display: flex;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--dark);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .username {
    font-size: 10px;
    line-height: 12px;
    color: var(--grey);
  }

  .form {
    display: flex;
    align-items: center;
    background: var(--dark);
    border-radius: 6px;
    height: 27px;
    padding: 7px 10px;
    column-gap: 16px;
    width: 300px;
    position: relative;
  }

  .icon {
    width: 13px;
    height: 13px;
  }

  .icon svg {
    width: 100%;
    height: 100%;
    fill: var(--dark-sea);
  }

  .input {
    flex-grow: 1;
  }

  .input input {
    font-family: Montserrat, Roboto, sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: var(--grey);
    background: none;
    outline: none;
    width: 100%;
  }

  .account {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  .favourites {
    cursor: pointer;
  }

  .account svg {
    width: 24px;
    height: 24px;
  }

  .icon-fav {
    stroke: var(--grey);
    fill: none;
  }

  .icon-cart {
    fill: var(--grey);
  }

  .icon-fav:hover {
    stroke: var(--white);
  }

  .icon-cart:hover {
    fill: var(--white);
  }

  .cart {
    position: relative;
  }

  .count {
    position: absolute;
    width: 14px;
    height: 14px;
    background: var(--violet);
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 10px;
    color: var(--light);
    text-align: center;
    line-height: 16px;
  }

  .box {
    z-index: 9;
    top: 120%;
    position: absolute;
    width: 100%;
    left: 0;
    max-height: 300px;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    background: var(--dark-sea);
    border-radius: 8px;
  }

  .box::-webkit-scrollbar {
    display: none;
  }

  .item {
    font-size: 13px;
    color: var(--grey);
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  .item:hover {
    color: var(--light);
  }

  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    height: 50px;
    width: 50px;
  }
`;