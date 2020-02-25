import React, { Component } from "react";

import NotificationCounter from "./NotificationCounter";

import SearchIcon from "../assets/magnifying-glass.svg";
import ProductIcon from "../assets/product.svg";
class Productions extends Component {
  render() {
    return (
      <div className="production">
        <div className="production-header">
          <h1>
            <span className="production-icon">
              <object data={ProductIcon}>Product Icon</object>
            </span>
            Production House
          </h1>
          <div className="button blue">
            Categories <i className="fas fa-caret-down"></i>
          </div>
          <div className="search-bar">
            <div className="search-bar-icon">
              <img src={SearchIcon} alt="search-icon"></img>
            </div>
            <input
              type="text"
              name="search-bar"
              className="search-bar-input"
              placeholder="Search"
            />
            <div className="search-bar-cancel">X</div>
          </div>
        </div>
        <div className="production-body">
          <div className="display-options">
            <div className="tabs">
              <div className="tab-option active">
                <div className="tab-option-inner">
                  <h3>All Productions</h3>
                  <span className="production-number">192</span>
                </div>
              </div>
              <div className="tab-option">
                <div className="tab-option-inner">
                  <h3>Awaiting Production</h3>
                  <span className="awaiting-count">19</span>
                </div>
              </div>
              <div className="tab-option">
                <div className="tab-option-inner">
                  <h3>Completed</h3>
                </div>
              </div>
            </div>
            <div className="display-actions">
              <div className="button button-small">Print worksheet</div>
              <div className="mark-as-complete">
                Mark as Complete <i className="fas fa-caret-down"></i>
              </div>
              <div className="button save">Save</div>
            </div>
          </div>
          <table className="production-table" cellSpacing="0">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="select-all" id="" />
                </th>
                <th>Order #</th>
                <th>Item #</th>
                <th>Details</th>
                <th>Colors</th>
                <th>Qty</th>
                <th>Print Type</th>
                <th>Delivery Method</th>
                <th>Delivery Time</th>
                <th>Production Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="select" id="" />
                </td>
                <td>#232JODJSDKN2</td>
                <td>#232JODJSDKN2</td>
                <td>
                  <div className="details"></div>
                </td>
                <td>
                  <div className="button">Royal</div>
                </td>
                <td>L X 4</td>
                <td>DTG Print</td>
                <td>
                  <div className="rush-shipping">Rush Shipping</div>
                </td>
                <td>
                  <div className="delivery-date">23 - June - 2019</div>{" "}
                  <div className="time-left">
                    Time Left <span>10:00:00</span>
                  </div>
                </td>
                <td>Running 2 of 5</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="select" id="" />
                </td>
                <td>#232JODJSDKN2</td>
                <td>#232JODJSDKN2</td>
                <td>
                  <div className="details"></div>
                </td>
                <td>
                  <div className="button">Royal</div>
                </td>
                <td>L X 4</td>
                <td>DTG Print</td>
                <td>
                  <div className="rush-shipping">Rush Shipping</div>
                </td>
                <td>
                  <div className="delivery-date">23 - June - 2019</div>{" "}
                  <div className="time-left">
                    Time Left <span>10:00:00</span>
                  </div>
                </td>
                <td>Running 2 of 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Productions;
