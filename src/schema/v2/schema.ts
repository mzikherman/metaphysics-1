import { GraphQLSchema, GraphQLObjectType } from "graphql"

import Artwork from "./artwork"
import ArtworkAttributionClasses from "./artworkAttributionClasses"
import Artist from "./artist"
import Fair from "./fair"
import Gene from "./gene"
import HomePage from "./home"
import { City } from "./city"
import FollowArtist from "./me/follow_artist"
import FollowProfile from "./me/follow_profile"
import FollowGene from "./me/follow_gene"
import FollowShow from "./me/follow_show"
import Sale from "./sale/index"
import Sales from "./sales"
import SaleArtwork from "./sale_artwork"
import SaleArtworks from "./sale_artworks"
import { Search } from "./search"
import Show from "./show"
import Me from "./me"
import MatchArtist from "./match/artist"
import System from "./system"

// import Status from "./status"
// import Artworks from "./artworks"
// import Artists from "./artists"
// import Collection from "./collection"
// import { CreditCard } from "./credit_card"
// import ExternalPartner from "./external_partner"
// import Fairs from "./fairs"
// import Genes from "./genes"
// import GeneFamilies from "./gene_families"
// import GeneFamily from "./gene_family"
// import OrderedSet from "./ordered_set"
// import OrderedSets from "./ordered_sets"
// import Profile from "./profile"
// import Partner from "./partner"
// import Partners from "./partners"
// import FilterPartners from "./filter_partners"
// import { filterArtworksConnection } from "./filterArtworksConnection"
// import PartnerCategory from "./partner_category"
// import PartnerCategories from "./partner_categories"
// import PopularArtists from "./artists/popular"
// import SuggestedGenes from "./suggested_genes"
// import Tag from "./tag"
// import TrendingArtists from "./artists/trending"
// import Users from "./users"
// import { User } from "./user"
// import MatchGene from "./match/gene"
// import CausalityJWT from "./causality_jwt"

import UpdateConversationMutation from "./me/conversation/update_conversation_mutation"
import SendConversationMessageMutation from "./me/conversation/send_message_mutation"
import UpdateCollectorProfile from "./me/update_collector_profile"
import CreateSubmissionMutation from "./me/consignments/create_submission_mutation"
import UpdateSubmissionMutation from "./me/consignments/update_submission_mutation"
import AddAssetToConsignmentSubmission from "./me/consignments/add_asset_to_submission_mutation"
import SaveArtworkMutation from "./me/save_artwork_mutation"
import { endSaleMutation } from "./sale/end_sale_mutation"
import CreateAssetRequestLoader from "./asset_uploads/create_asset_request_mutation"
import CreateGeminiEntryForAsset from "./asset_uploads/finalize_asset_mutation"
import UpdateMyUserProfileMutation from "./me/update_me_mutation"
import createBidderMutation from "./me/create_bidder_mutation"
import createCreditCardMutation from "./me/create_credit_card_mutation"
import { deleteCreditCardMutation } from "./me/delete_credit_card_mutation"
import { BidderPositionMutation } from "./me/bidder_position_mutation"
import { sendFeedbackMutation } from "./sendFeedbackMutation"
import { OrderPartyUnionType } from "./ecommerce/types/order_party_union"

import { SearchableItem } from "./SearchableItem"
import { ArtistArtworkGridType } from "./artwork/artworkContextGrids/ArtistArtworkGrid"
import { AuctionArtworkGridType } from "./artwork/artworkContextGrids/AuctionArtworkGrid"
import { PartnerArtworkGridType } from "./artwork/artworkContextGrids/PartnerArtworkGrid"
import { RelatedArtworkGridType } from "./artwork/artworkContextGrids/RelatedArtworkGrid"
import { ShowArtworkGridType } from "./artwork/artworkContextGrids/ShowArtworkGrid"

import ObjectIdentification from "./object_identification"
import { ResolverContext } from "types/graphql"
import config from "config"
import { ArtworkVersionType } from "./artwork_version"

const { ENABLE_CONSIGNMENTS_STITCHING } = config

// If you're using stitching then we _don't_ want to include particular mutations
// which come from the stitching instead of our manual version
const stitchedMutations: any = {}

if (!ENABLE_CONSIGNMENTS_STITCHING) {
  stitchedMutations.createConsignmentSubmission = CreateSubmissionMutation
  stitchedMutations.updateConsignmentSubmission = UpdateSubmissionMutation
  stitchedMutations.addAssetToConsignmentSubmission = AddAssetToConsignmentSubmission
}

export default new GraphQLSchema({
  mutation: new GraphQLObjectType<any, ResolverContext>({
    name: "Mutation",
    fields: {
      createBidder: createBidderMutation,
      createBidderPosition: BidderPositionMutation,
      createCreditCard: createCreditCardMutation,
      deleteCreditCard: deleteCreditCardMutation,
      followArtist: FollowArtist,
      followProfile: FollowProfile,
      followGene: FollowGene,
      followShow: FollowShow,
      updateCollectorProfile: UpdateCollectorProfile,
      updateMyUserProfile: UpdateMyUserProfileMutation,
      updateConversation: UpdateConversationMutation,
      sendConversationMessage: SendConversationMessageMutation,
      sendFeedback: sendFeedbackMutation,
      saveArtwork: SaveArtworkMutation,
      endSale: endSaleMutation,
      requestCredentialsForAssetUpload: CreateAssetRequestLoader,
      createGeminiEntryForAsset: CreateGeminiEntryForAsset,
      ...stitchedMutations,
    },
  }),
  query: new GraphQLObjectType<any, ResolverContext>({
    name: "Query",
    fields: {
      artworkAttributionClasses: ArtworkAttributionClasses,
      // article: Article,
      // articles: Articles,
      artwork: Artwork,
      // artworkVersion: ArtworkVersionResolver,
      // artworks: Artworks,
      artist: Artist,
      // artists: Artists,
      // causalityJWT: CausalityJWT, // TODO: Perhaps this should go into `system` ?
      city: City,
      // collection: Collection,
      // creditCard: CreditCard,
      // externalPartner: ExternalPartner,
      fair: Fair,
      // fairs: Fairs,
      // filterPartners: FilterPartners,
      // filterArtworksConnection: filterArtworksConnection(),
      gene: Gene,
      // genes: Genes,
      // suggestedGenes: SuggestedGenes,
      // geneFamilies: GeneFamilies,
      // geneFamily: GeneFamily,
      homePage: HomePage,
      matchArtist: MatchArtist, // TODO: Remove in favour of `searchConnection`
      // matchGene: MatchGene,
      me: Me,
      node: ObjectIdentification.NodeField,
      // orderedSet: OrderedSet,
      // orderedSets: OrderedSets,
      // partner: Partner,
      // partnerCategories: PartnerCategories,
      // partnerCategory: PartnerCategory,
      // partners: Partners,
      // profile: Profile,
      sale: Sale,
      saleArtwork: SaleArtwork, // TODO: Remove in favour of using node field
      saleArtworksConnection: SaleArtworks,
      sales: Sales, // TODO: Make a connection
      searchConnection: Search,
      show: Show,
      // status: Status,
      system: System,

      // tag: Tag,
      // trendingArtists: TrendingArtists,
      // user: User,
      // users: Users,
      // popularArtists: PopularArtists,
    },
  }),
  // These are for orphaned types which are types which should be in the schema,
  // but can’t be discovered by traversing the types and fields from query.
  types: [
    ArtworkVersionType,
    OrderPartyUnionType,
    SearchableItem,
    ArtistArtworkGridType,
    AuctionArtworkGridType,
    PartnerArtworkGridType,
    RelatedArtworkGridType,
    ShowArtworkGridType,
  ],
})
