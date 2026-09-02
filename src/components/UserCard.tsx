import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { User } from '../services/userService'

function initials(name: string) {
    return name.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

type UserCardProps = {
    user: User
    onEdit: (user: User) => void
    onDelete: (user: User) => void
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <IconButton
                        size="small"
                        aria-label={`Editar ${user.name}`}
                        onClick={() => onEdit(user)}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        aria-label={`Eliminar ${user.name}`}
                        color="error"
                        onClick={() => onDelete(user)}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Stack>

                <Stack spacing={0.5} alignItems="center" sx={{ mt: -1 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                        {initials(user.name)}
                    </Avatar>

                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography variant="subtitle1" noWrap>
                            {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                            @{user.username}
                        </Typography>
                        <Typography variant="body2" color="primary" noWrap>
                            {user.email}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}