import type { WalletName } from "@solana/wallet-adapter-base";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import type { Wallet } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import type { FC, MouseEvent } from "react";
import React, { useCallback, useMemo, useState } from "react";
import { Collapse } from "./Collapse";
import { WalletListItem } from "./WalletListItem";

import { Credenza, CredenzaContent } from "@/components/ui/credenza";

export interface WalletModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WalletModal: FC<WalletModalProps> = ({ open, setOpen }) => {
  const { wallets, select } = useWallet();
  const [expanded, setExpanded] = useState(false);

  const [listedWallets, collapsedWallets] = useMemo(() => {
    const installed: Wallet[] = [];
    const notInstalled: Wallet[] = [];

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet);
      } else {
        notInstalled.push(wallet);
      }
    }

    return installed.length ? [installed, notInstalled] : [notInstalled, []];
  }, [wallets]);

  const handleWalletClick = useCallback(
    (event: MouseEvent, walletName: WalletName) => {
      select(walletName);
      setOpen(false);
    },
    [select, setOpen]
  );

  const handleCollapseClick = useCallback(
    () => setExpanded(!expanded),
    [expanded]
  );

  return (
    <Credenza open={open} onOpenChange={(value) => setOpen(value)}>
      <CredenzaContent className="p-4">
        {listedWallets.length ? (
          <div className="mt-6 md:m-0">
            <ul className="flex flex-col gap-2">
              {listedWallets.map((wallet) => (
                <WalletListItem
                  key={wallet.adapter.name}
                  handleClick={(event) =>
                    handleWalletClick(event, wallet.adapter.name)
                  }
                  wallet={wallet}
                />
              ))}

              {collapsedWallets.length ? (
                <Collapse
                  expanded={expanded}
                  id="wallet-adapter-modal-collapse"
                >
                  {collapsedWallets.map((wallet) => (
                    <WalletListItem
                      key={wallet.adapter.name}
                      handleClick={(event) =>
                        handleWalletClick(event, wallet.adapter.name)
                      }
                      tabIndex={expanded ? 0 : -1}
                      wallet={wallet}
                    />
                  ))}
                </Collapse>
              ) : null}
            </ul>
            {collapsedWallets.length ? (
              <button
                className="wallet-adapter-modal-list-more"
                onClick={handleCollapseClick}
                tabIndex={0}
              >
                <span className="text-sm text-muted-foreground">
                  {expanded ? "Less " : "More "}options
                </span>
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    expanded ? "wallet-adapter-modal-list-more-icon-rotate" : ""
                  }`}
                >
                  <path d="M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" />
                </svg>
              </button>
            ) : null}
          </div>
        ) : (
          <div>
            <h1 className="font-semibold mb-8">
              You will need a wallet on Solana to continue
            </h1>
            <span className="text-muted-foreground">No wallet found</span>
            {collapsedWallets.length ? (
              <>
                <button
                  className="wallet-adapter-modal-list-more"
                  onClick={handleCollapseClick}
                  tabIndex={0}
                >
                  <span>
                    {expanded ? "Hide " : "Already have a wallet? View "}
                    options
                  </span>
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      expanded
                        ? "wallet-adapter-modal-list-more-icon-rotate"
                        : ""
                    }`}
                  >
                    <path d="M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" />
                  </svg>
                </button>

                <Collapse
                  expanded={expanded}
                  id="wallet-adapter-modal-collapse"
                >
                  <ul className="wallet-adapter-modal-list">
                    {collapsedWallets.map((wallet) => (
                      <WalletListItem
                        key={wallet.adapter.name}
                        handleClick={(event) =>
                          handleWalletClick(event, wallet.adapter.name)
                        }
                        tabIndex={expanded ? 0 : -1}
                        wallet={wallet}
                      />
                    ))}
                  </ul>
                </Collapse>
              </>
            ) : null}
          </div>
        )}
      </CredenzaContent>
    </Credenza>
  );
};
