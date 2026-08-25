import { useState } from "react";

import {
  networkEdges,
  networkNodes,
  type NetworkNodeId,
} from "../../data/network";

import "./NetworkExplorer.css";

export default function NetworkExplorer() {
  const [activeNodeId, setActiveNodeId] =
    useState<NetworkNodeId>("center");

  const activeNode = networkNodes.find(
    (node) => node.id === activeNodeId,
  );

  if (!activeNode) {
    return null;
  }

  const connectedNodeIds = new Set<NetworkNodeId>();

  networkEdges.forEach((edge) => {
    if (edge.from === activeNodeId) {
      connectedNodeIds.add(edge.to);
    }

    if (edge.to === activeNodeId) {
      connectedNodeIds.add(edge.from);
    }
  });

  return (
    <div className="network-explorer">
      <div className="network-canvas">
        <div
          className="network-canvas__grid"
          aria-hidden="true"
        />

        <div className="network-canvas__status">
          <span />

          NETWORK ONLINE
        </div>

        <svg
          className="network-connections"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {networkEdges.map((edge) => {
            const from = networkNodes.find(
              (node) => node.id === edge.from,
            );

            const to = networkNodes.find(
              (node) => node.id === edge.to,
            );

            if (!from || !to) {
              return null;
            }

            const isActive =
              edge.from === activeNodeId ||
              edge.to === activeNodeId;

            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                className={
                  isActive
                    ? "network-connection network-connection--active"
                    : "network-connection"
                }
              />
            );
          })}
        </svg>

        {networkNodes.map((node) => {
          const isActive =
            node.id === activeNodeId;

          const isConnected =
            connectedNodeIds.has(node.id);

          return (
            <button
              key={node.id}
              type="button"
              className={[
                "network-node",
                isActive
                  ? "network-node--active"
                  : "",
                isConnected
                  ? "network-node--connected"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              aria-pressed={isActive}
              aria-label={`${node.title} hakkında bilgi göster`}
              onClick={() =>
                setActiveNodeId(node.id)
              }
            >
              <span className="network-node__ring">
                <span className="network-node__core">
                  {node.shortLabel}
                </span>
              </span>

              <span className="network-node__title">
                {node.title}
              </span>
            </button>
          );
        })}

        <div
          className="network-canvas__coordinate"
          aria-hidden="true"
        >
          PLAI / SEIZMA NETWORK
        </div>
      </div>

      <aside
        className="network-panel"
        aria-live="polite"
      >
        <div className="network-panel__top">
          <span className="network-panel__number">
            {activeNode.number}
          </span>

          <span className="network-panel__state">
            ACTIVE NODE
          </span>
        </div>

        <div className="network-panel__content">
          <span className="network-panel__label">
            Seçili bağlantı noktası
          </span>

          <h3>
            {activeNode.title}
          </h3>

          <p>
            {activeNode.description}
          </p>
        </div>

        <div className="network-panel__protocol">
          <span>
            PROTOCOL
          </span>

          <strong>
            {activeNode.protocol}
          </strong>
        </div>

        <div className="network-panel__footer">
          <span />

          NODE CONNECTED
        </div>
      </aside>
    </div>
  );
}