import gql from "lib/gql"
import { formatMoney } from "accounting"
import { GraphQLSchema } from "graphql"
import {
  moneyMajorResolver,
  symbolFromCurrencyCode,
} from "schema/v2/fields/money"

const saleArtworkStub = {
  artwork: {
    artist: {
      _id: "5f73a8584ea32a001317456e",
      id: "pedro-g-ocejo-huerta",
      sortable_id: "huerta-pedro-g-ocejo",
      name: "Pedro G. Ocejo Huerta",
      years: "born 1990",
      public: true,
      birthday: "1990",
      consignable: false,
      deathday: "",
      nationality: "Cuban",
      published_artworks_count: 23,
      forsale_artworks_count: 22,
      artworks_count: 23,
      original_width: 3764,
      original_height: 2772,
      image_url:
        "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/:version.jpg",
      image_versions: ["large", "square", "tall", "four_thirds"],
      image_urls: {
        large:
          "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/large.jpg",
        square:
          "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/square.jpg",
        tall:
          "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/tall.jpg",
        four_thirds:
          "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/four_thirds.jpg",
      },
      target_supply: false,
    },
    partner: {
      partner_categories: [],
      _id: "5ffca1d84f953900068cc5c7",
      id: "mocktion-demo-partner-deploy-test",
      default_profile_id: "mocktion-demo-partner-deploy-test",
      default_profile_public: true,
      sortable_id: "mocktion-demo-partner-deploy-test",
      type: "Auction",
      name: "Mocktion Demo Partner Deploy Test",
      short_name: null,
      pre_qualify: false,
      website: "",
      has_full_profile: false,
      has_fair_partnership: false,
      has_limited_fair_partnership: false,
      profile_layout: "gallery_default",
      display_works_section: true,
      profile_banner_display: null,
      profile_artists_layout: null,
      display_artists_section: true,
    },
    images: [
      {
        id: "5ffca1db4f953900068cc5cf",
        position: 1,
        aspect_ratio: 1.17,
        downloadable: false,
        original_width: 1024,
        original_height: 872,
        is_default: true,
        image_url:
          "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/:version.jpg",
        image_versions: [
          "square",
          "small",
          "larger",
          "medium",
          "large",
          "tall",
          "medium_rectangle",
          "large_rectangle",
          "normalized",
        ],
        image_urls: {
          square:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/square.jpg",
          small:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/small.jpg",
          larger:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/larger.jpg",
          medium:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/medium.jpg",
          large:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/large.jpg",
          tall:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/tall.jpg",
          medium_rectangle:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/medium_rectangle.jpg",
          large_rectangle:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/large_rectangle.jpg",
          normalized:
            "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/normalized.jpg",
        },
        tile_size: 512,
        tile_overlap: 0,
        tile_format: "jpg",
        tile_base_url:
          "https://d2v80f5yrouhh2.cloudfront.net/sp1m0WxNxIaGA88iG9F6bQ/dztiles",
        max_tiled_height: 872,
        max_tiled_width: 1024,
        gemini_token: "sp1m0WxNxIaGA88iG9F6bQ",
        gemini_token_updated_at: null,
      },
    ],
    edition_sets: [],
    cultural_makers: [],
    artists: [
      {
        _id: "5f73a8584ea32a001317456e",
        id: "pedro-g-ocejo-huerta",
        sortable_id: "huerta-pedro-g-ocejo",
        name: "Pedro G. Ocejo Huerta",
        years: "born 1990",
        public: true,
        birthday: "1990",
        consignable: false,
        deathday: "",
        nationality: "Cuban",
        published_artworks_count: 23,
        forsale_artworks_count: 22,
        artworks_count: 23,
        original_width: 3764,
        original_height: 2772,
        image_url:
          "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/:version.jpg",
        image_versions: ["large", "square", "tall", "four_thirds"],
        image_urls: {
          large:
            "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/large.jpg",
          square:
            "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/square.jpg",
          tall:
            "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/tall.jpg",
          four_thirds:
            "https://d32dm0rphc51dk.cloudfront.net/SvHpEe1LlwFbvDiT_y0Aqw/four_thirds.jpg",
        },
        target_supply: false,
      },
    ],
    _id: "5ffca1db4f953900068cc5ca",
    id: "pedro-g-ocejo-huerta-transcendence",
    title: "Transcendence",
    display: "Pedro G. Ocejo Huerta, Transcendence",
    manufacturer: null,
    category: "",
    medium: "4-color screenprint on paper-backed wood veneer",
    unique: false,
    forsale: false,
    sold: false,
    date: "",
    dimensions: {
      in: "20 1/8 × 27 in",
      cm: "51.1 × 68.6 cm",
    },
    price: "",
    availability: "not for sale",
    availability_hidden: false,
    ecommerce: false,
    offer: false,
    collecting_institution: "",
    blurb:
      'Ed Ruscha defies categorization with his diverse output of photographic books and tongue-in-cheek photo-collages, paintings, and drawings. Insects as a subject evoke both Dadaist and Surrealistic tendencies, and the physical environment of the artist\'s studio. Why insects? "Because I have a jillion cockroaches around my studio. I love them, but I don’t want them around."',
    edition_sets_count: 0,
    published: true,
    private: false,
    price_currency: "USD",
    price_cents: null,
    sale_message: "Not for sale",
    inquireable: false,
    acquireable: false,
    offerable: false,
    published_at: "2021-01-11T19:07:07+00:00",
    can_share: true,
    can_share_image: true,
    deleted_at: null,
    cultural_maker: null,
    sale_ids: ["5ffca1d84f953900068cc5c9"],
    attribution_class: null,
  },
  bidder_positions_count: 0,
  display_highest_bid_amount_dollars: null,
  display_minimum_next_bid_dollars: "CHF 1,400",
  highest_bid_amount_cents: null,
  highest_bid: null,
  id: "pedro-g-ocejo-huerta-transcendence",
  minimum_next_bid_cents: 140000,
  sale_id: "deploy-test",
  _id: "5fec9c2caa6ad9000d757ae0",
  currency: "CHF",
  display_estimate_dollars: null,
  display_high_estimate_dollars: "CHF 2,500",
  display_low_estimate_dollars: "CHF 1,800",
  display_opening_bid_dollars: "CHF 1,400",
  estimate_cents: null,
  high_estimate_cents: 250000,
  lot_label: "1",
  lot_number: 1,
  low_estimate_cents: 180000,
  opening_bid_cents: 140000,
  position: 1.0,
  reserve_status: "no_reserve",
  reserve_unknown: true,
  symbol: "CHF",
  user_notes: "",
  withdrawn: false,
  withdrawn_at: null,
}

const lotStub = {
  bidCount: 4,
  reserveStatus: "NoReserve",
  sellingPrice: {
    display: "$1,600",
  },
  soldStatus: "ForSale",
  internalID: "5fec9c2caa6ad9000d757ae0",
}

const resolveLotCentsFieldToMoney = (centsField) => {
  return async (parent, _args, context, _info) => {
    const { internalID, [centsField]: cents } = parent
    const { currency } = await context.saleArtworkRootLoader(internalID)
    const major = await moneyMajorResolver({ cents, currency }, {}, context)

    return {
      major,
      minor: cents,
      currencyCode: currency,
      display: formatMoney(major, symbolFromCurrencyCode(currency), 0),
    }
  }
}

export const causalityStitchingEnvironment = ({
  causalitySchema,
  localSchema,
}: {
  causalitySchema: GraphQLSchema & { transforms: any }
  localSchema: GraphQLSchema
}) => {
  return {
    extensionSchema: gql`
      extend type Me {
        auctionsLotStandingConnection(
          first: Int
          last: Int
          after: String
          before: String
        ): AuctionsLotStandingConnection!
      }

      extend type AuctionsLotStanding {
        saleArtwork: SaleArtwork
      }

      extend type AuctionsLotState {
        "current high bid recognized on the live auction floor"
        floorSellingPrice: Money
        "current high bid"
        sellingPrice: Money
        onlineAskingPrice: Money
      }

      type Lot {
        internalID: String
        lot: AuctionsLotState!
        saleArtwork: SaleArtwork
      }

      # A connection to a list of items.
      type LotConnection {
        # A list of edges.
        edges: [LotEdge]
        pageCursors: PageCursors!

        # Information to aid in pagination.
        pageInfo: PageInfo!
        totalCount: Int
      }

      # An edge in a connection.
      type LotEdge {
        # A cursor for use in pagination
        cursor: String!

        # The item at the end of the edge
        node: Lot
      }

      extend type Me {
        watchedLotsConnection(
          after: String
          before: String
          first: Int
          last: Int
        ): LotConnection
      }
    `,

    resolvers: {
      AuctionsLotStanding: {
        saleArtwork: {
          fragment: gql`
            fragment AuctionsLotStandingSaleArtwork on AuctionsLotStanding {
              lotState {
                internalID
              }
            }
          `,
          resolve: (parent, _args, context, info) => {
            return info.mergeInfo.delegateToSchema({
              schema: localSchema,
              operation: "query",
              fieldName: "saleArtwork",
              args: { id: parent.lotState.internalID },
              context,
              info,
            })
          },
        },
      },
      AuctionsLotState: {
        floorSellingPrice: {
          fragment: gql`
            ... on AuctionsLotState {
              internalID
              floorSellingPriceCents
            }
          `,
          resolve: resolveLotCentsFieldToMoney("floorSellingPriceCents"),
        },
        sellingPrice: {
          fragment: gql`
            ... on AuctionsLotState {
              internalID
              sellingPriceCents
            }
          `,
          resolve: resolveLotCentsFieldToMoney("sellingPriceCents"),
        },
        onlineAskingPrice: {
          fragment: gql`
            ... on AuctionsLotState {
              internalID
              onlineAskingPriceCents
            }
          `,
          resolve: resolveLotCentsFieldToMoney("onlineAskingPriceCents"),
        },
      },
      Me: {
        auctionsLotStandingConnection: {
          // The required query to get access to the object, e.g. we have to
          // request `id` on a Me in order to access the user's lot standings
          fragment: gql`
            fragment MeLotStandings on Me {
              internalID
            }
          `,
          // The function to handle getting the lot standings correctly, we
          // use the root query `_unused_auctionsLotStandingConnection` to grab
          // the data from the local causality schema. Other args from the field
          // (eg first, after, last, before) are forwarded automatically, so we only
          // need the userId.
          resolve: (parent, _args, context, info) => {
            return info.mergeInfo
              .delegateToSchema({
                schema: causalitySchema,
                operation: "query",
                fieldName: "_unused_auctionsLotStandingConnection",
                args: {
                  userId: parent.internalID,
                },
                context,
                info,
              })
              .then(async (lotStandingsConnection) => {
                const promisedSaleArtworks = lotStandingsConnection.edges.map(
                  ({ node: { lot } }) => {
                    return context
                      .saleArtworkRootLoader(lot.internalID)
                      .catch(() => null)
                  }
                )

                const availableSaleArtworks = (
                  await Promise.all(promisedSaleArtworks)
                ).filter((sa) => sa !== null)
                // FIXME: this depends on the presence of edge->node->lot->internalID in the query. see https://github.com/artsy/metaphysics/pull/2885#discussion_r543693841
                const availableEdges = lotStandingsConnection.edges.reduce(
                  (acc: any, edge: any) => {
                    const saleArtwork = availableSaleArtworks.find(
                      (sa: any) => sa._id === edge.node.lot.internalID
                    )
                    if (saleArtwork) {
                      return [
                        ...acc,
                        { ...edge, node: { ...edge.node, saleArtwork } },
                      ]
                    } else {
                      return acc
                    }
                  },
                  []
                )
                return { ...lotStandingsConnection, edges: availableEdges }
              })
          },
        },
        watchedLotsConnection: {
          fragment: gql`
            fragment MeWatchedLotsConnection on Me {
              __typename
            }
          `,
          resolve: (parent, _args, context) => {
            return {
              totalCount: 1,
              pageCursors: {},
              edges: [{ node: { saleArtwork: saleArtworkStub, lot: lotStub } }],
            }
          },
        },
      },
    },
  }
}
