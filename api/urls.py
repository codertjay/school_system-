from rest_framework.routers import DefaultRouter
from .views import AssignmentViewSets

router = DefaultRouter()
router.register(r'',AssignmentViewSets,basename='assignments')

urlpatterns = router.urls

