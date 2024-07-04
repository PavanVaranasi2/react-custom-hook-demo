import {
  Card,
  CardContent,
  Typography as MuiTypography,
  styled,
} from "@mui/material";
import { Post } from "../../hooks/useFetchPosts";

const StyledBlueCardContent = styled(CardContent)({
  backgroundColor: "#000050",
});

export const PostCard = ({ userId, id, title, body }: Post) => (
  <Card raised>
    <StyledBlueCardContent>
      <MuiTypography variant="body1" gutterBottom>
        User ID: {userId}
      </MuiTypography>
      <MuiTypography variant="h5" component="h2">
        Title: {title}
      </MuiTypography>
      <MuiTypography variant="body2" component="p">
        Body: {body}
      </MuiTypography>
    </StyledBlueCardContent>
  </Card>
);
