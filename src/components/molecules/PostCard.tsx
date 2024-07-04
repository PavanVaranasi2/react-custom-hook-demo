import {
  Card,
  CardContent,
  Typography as MuiTypography,
  styled,
} from "@mui/material";
import { Post } from "../../hooks/useFetchPosts";

interface PostCardProps {
  post: Post;
}

const StyledBlueCardContent = styled(CardContent)({
  backgroundColor: "#000050",
});

export const PostCard = ({ post }: PostCardProps) => (
  <Card raised>
    <StyledBlueCardContent>
      <MuiTypography variant="body1" gutterBottom>
        User ID: {post.userId}
      </MuiTypography>
      <MuiTypography variant="h5" component="h2">
        Title: {post.title}
      </MuiTypography>
      <MuiTypography variant="body2" component="p">
        Body: {post.body}
      </MuiTypography>
    </StyledBlueCardContent>
  </Card>
);
