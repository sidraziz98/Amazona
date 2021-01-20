import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import Message from "../components/Message";
import Loader from "../components/Loader";
// import {
//     Row, Table, Col, ListGroup, Image, Form, Button, Card,
// } from "react-bootstrap";

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);
    return (
    <div>
      <h2>Order History</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {/* {console.log(orders.orderHistory, "hello")} */}
          {orders.orderHistory && orders.orderHistory.map((order) => {
              {console.log(order)}
              <tr key={order.order_id}>
                <td>hello</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order.order_id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )}
    </div>
        // <>
        //     {loading ? (
        //         <Loader />
        //     ) : error ? (
        //         <Message variant="danger">{error}</Message>
        //     ) : (<>
        //         <h2>Order History</h2>
        //         <Row>
        //             {!loading && orders.orderHistory && orders.orderHistory.map((order) => {
        //                 <Col key={order.order_id}>
        //                     {console.log(order.order_id, "hello")}
        //                 </Col>
        //             })}
        //         </Row>
        //     </>
        //     )}
        // </>
    );
}