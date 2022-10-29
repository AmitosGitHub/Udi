import React, { useState } from 'react'
import { connect } from 'react-redux'

function _AppFooter({ count }) {
  return <footer className="app-footer full"></footer>
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {}

export const AppFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppFooter)
